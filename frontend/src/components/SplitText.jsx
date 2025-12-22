import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({
    text,
    className = '',
    delay = 0,
    duration = 0.5,
    stagger = 0.05
}) => {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay * i,
            },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transform: "scale(0.8)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transform: "scale(1)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: duration
            },
        },
    };

    return (
        <motion.div
            style={{ display: 'inline-block', overflow: 'hidden' }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: 'inline-block' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default SplitText;
