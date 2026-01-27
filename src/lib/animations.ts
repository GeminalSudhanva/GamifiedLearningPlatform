// Framer Motion animation variants for the gamified learning platform

import { Variants } from "framer-motion";

// Fade in animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 15,
        },
    },
};

// Container with staggered children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// Card hover effects
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    hover: {
        scale: 1.03,
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 20,
        },
    },
};

// 3D tilt effect
export const tilt3D = {
    rest: {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
        },
    },
};

// Floating animation
export const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const floatingSlow: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
        y: [-8, 8, -8],
        rotate: [-3, 3, -3],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Pulse animation
export const pulseAnimation: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Button glow effect
export const buttonGlow: Variants = {
    initial: {
        boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)",
    },
    animate: {
        boxShadow: [
            "0 0 20px rgba(79, 70, 229, 0.3)",
            "0 0 40px rgba(79, 70, 229, 0.5)",
            "0 0 20px rgba(79, 70, 229, 0.3)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Slide in from sides
export const slideInFromLeft: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        },
    },
};

export const slideInFromRight: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        },
    },
};

// Badge unlock effect
export const badgeUnlock: Variants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 15,
        },
    },
};

// Progress bar fill
export const progressFill = (width: number) => ({
    hidden: { width: 0 },
    visible: {
        width: `${width}%`,
        transition: {
            duration: 1.5,
            ease: "easeOut",
        },
    },
});

// Counter animation helper
export const counterAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
};

// Parallax scroll effect values
export const parallaxY = (offset: number) => ({
    y: offset,
});

// Viewport settings for scroll-triggered animations
export const viewportOnce = {
    once: true,
    margin: "-100px",
};

export const viewportAlways = {
    once: false,
    margin: "-50px",
};

// Wiggle animation
export const wiggle: Variants = {
    initial: { rotate: 0 },
    animate: {
        rotate: [-5, 5, -5, 5, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

// Bounce animation
export const bounce: Variants = {
    initial: { y: 0 },
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
