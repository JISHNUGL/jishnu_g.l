import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
    children,
    className = '',
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = '20%',
    scaleEndPosition = '10%',
    baseScale = 0.85,
    scaleDuration = 0.5,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete
}) => {
    const scrollerRef = useRef(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef(null);
    const lenisRef = useRef(null);
    const cardsRef = useRef([]);
    const lastTransformsRef = useRef(new Map());
    const isUpdatingRef = useRef(false);

    const measurementsRef = useRef({
        scrollTop: 0,
        containerHeight: 0,
        cardTops: [],
        endElementTop: 0,
        stackPositionPx: 0,
        scaleEndPositionPx: 0
    });

    const calculateProgress = useCallback((scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }, []);

    const getElementOffset = useCallback(
        element => {
            if (useWindowScroll) {
                const rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            } else {
                return element.offsetTop;
            }
        },
        [useWindowScroll]
    );

    const updateMeasurements = useCallback(() => {
        const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current.clientHeight;
        const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current.scrollTop;

        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const endElement = scrollerRef.current?.querySelector('.scroll-stack-end');
        const endElementTop = endElement ? getElementOffset(endElement) : 0;

        const cardTops = cardsRef.current.map(card => card ? getElementOffset(card) : 0);

        measurementsRef.current = {
            scrollTop,
            containerHeight,
            cardTops,
            endElementTop,
            stackPositionPx,
            scaleEndPositionPx
        };
    }, [useWindowScroll, parsePercentage, stackPosition, scaleEndPosition, getElementOffset]);

    const updateCardTransforms = useCallback((scrollOverride = null) => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        let { scrollTop, containerHeight, cardTops, endElementTop, stackPositionPx, scaleEndPositionPx } = measurementsRef.current;

        // Use the smooth scroll value from Lenis if available
        if (scrollOverride !== null) {
            scrollTop = scrollOverride;
        }

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = cardTops[i];
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            // Precise scale calculation
            const scale = 1 - scaleProgress * (1 - targetScale);

            // Rotation calculation
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                // Simplified blur calculation for performance
                const depthInStack = Math.max(0, (scrollTop - pinStart) / 1000);
                // Alternatively, find visually top card index logic if strictly needed,
                // but direct calculation based on scroll depth is often smoother.
                // Reverting to original logic for fidelity but using cached values:

                let topCardIndex = 0;
                for (let j = 0; j < cardsRef.current.length; j++) {
                    const jCardTop = cardTops[j];
                    const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) {
                        topCardIndex = j;
                    }
                }

                if (i < topCardIndex) {
                    const depth = topCardIndex - i;
                    blur = Math.max(0, depth * blurAmount);
                }
            }

            // Simplified transform calculation - NO rounding to avoid stair-stepping/vibration
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
            const translateY = isPinned
                ? scrollTop - cardTop + stackPositionPx + itemStackDistance * i
                : (scrollTop > pinEnd ? pinEnd - cardTop + stackPositionPx + itemStackDistance * i : 0);

            // Use simplified 2D-like transform structure for stability
            // Only apply scale if it's changing significantly to avoid micro-jitters, but usually raw is fine
            // We removed rotation/blur from the string calculation entirely for maximum stability
            const transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;

            // Direct DOM update - relying on Lenis rAF loop from parent
            // We REMOVED the threshold check because it causes "sticking"
            // We REMOVED the extra requestAnimationFrame wrapper to ensure sync with scroll
            if (card.style.transform !== transform) {
                card.style.transform = transform;
            }

            lastTransformsRef.current.set(i, { translateY, scale });
        });

        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        baseScale,
        calculateProgress
    ]);

    const handleScroll = useCallback((e) => {
        // e can be the Lenis event object or a native event
        const scroll = e?.scroll ?? (useWindowScroll ? window.scrollY : scrollerRef.current.scrollTop);
        updateCardTransforms(scroll);
    }, [updateCardTransforms, useWindowScroll]);

    const setupLenis = useCallback(() => {
        const lenisConfig = {
            duration: 1.2,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            lerp: 0.05,
        };

        let lenis;
        if (useWindowScroll) {
            lenis = new Lenis(lenisConfig);
        } else {
            const scroller = scrollerRef.current;
            if (!scroller) return;
            lenis = new Lenis({
                ...lenisConfig,
                wrapper: scroller,
                content: scroller.querySelector('.scroll-stack-inner'),
            });
        }

        lenis.on('scroll', handleScroll);

        const raf = time => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };
        animationFrameRef.current = requestAnimationFrame(raf);

        lenisRef.current = lenis;
        return lenis;
    }, [handleScroll, useWindowScroll]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll('.scroll-stack-card')
                : scroller.querySelectorAll('.scroll-stack-card')
        );

        cardsRef.current = cards;

        // Initial measurement
        updateMeasurements();

        // Update transforms immediately
        updateCardTransforms();

        const handleResize = () => {
            updateMeasurements();
            updateCardTransforms();
        };

        window.addEventListener('resize', handleResize);
        setupLenis();

        // Add ResizeObserver to handle dynamic content changes (like images loading)
        let resizeObserver;
        if (scroller) {
            resizeObserver = new ResizeObserver((entries) => {
                // Wrap in requestAnimationFrame to avoid "ResizeObserver loop completed with undelivered notifications"
                // This delays the update slightly to the next frame, breaking the loop.
                window.requestAnimationFrame(() => {
                    if (!Array.isArray(entries) || !entries.length) return;
                    updateMeasurements();
                    updateCardTransforms();
                });
            });
            // Observe the scrolling container or the inner wrapper
            const target = useWindowScroll ? document.body : scroller.querySelector('.scroll-stack-inner');
            if (target) {
                resizeObserver.observe(target);
            }
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            stackCompletedRef.current = false;
            cardsRef.current = [];
            lastTransformsRef.current.clear();
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        setupLenis,
        updateMeasurements,
        updateCardTransforms,
        useWindowScroll
    ]);

    return (
        <div className={`scroll-stack-scroller ${useWindowScroll ? 'window-scroll' : ''} ${className}`.trim()} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {children}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;
