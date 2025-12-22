import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [rotateAmplitude, -rotateAmplitude]), {
        stiffness: 560,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-rotateAmplitude, rotateAmplitude]), {
        stiffness: 560,
        damping: 30,
    });

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(offsetX);
        y.set(offsetY);
    }

    function handleMouseEnter() {
        // scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative [transform-style:preserve-3d]"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale: 1,
                }}
                whileHover={{ scale: scaleOnHover }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-[15px] shadow-[0_30px_50px_-5px_rgba(0,0,0,0.4)] border-4 border-white/90"
                    style={{
                        translateZ: "50px", // Pushes image forward
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <motion.div
                        className="absolute top-0 left-0 z-[2] will-change-transform"
                        style={{
                            transform: "translateZ(80px)", // Float well above the image
                        }}
                    >
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-[3] hidden opacity-0 transition-[opacity,transform] duration-[250ms] ease-in-out group-hover:block group-hover:opacity-100 group-hover:translate-y-4 sm:block"
                    style={{
                        transform: "translateZ(80px)",
                    }}
                >
                    {/* Tooltip implementation if needed, currently using static caption below */}
                </motion.figcaption>
            )}
        </figure>
    );
}
