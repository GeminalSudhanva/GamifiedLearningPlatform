"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    pulse?: boolean;
    className?: string;
    onClick?: () => void;
    href?: string;
    ariaLabel?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    pulse = false,
    className = "",
    onClick,
    href,
    ariaLabel,
}: ButtonProps) {
    const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]
      text-white shadow-lg
      hover:shadow-xl hover:shadow-purple-500/25
      focus-visible:ring-purple-500
    `,
        secondary: `
      bg-white text-[#4F46E5]
      border-2 border-[#4F46E5]
      hover:bg-[#4F46E5] hover:text-white
      focus-visible:ring-purple-500
    `,
        ghost: `
      bg-transparent text-[#4F46E5]
      hover:bg-purple-50
      focus-visible:ring-purple-500
    `,
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const motionProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    };

    const pulseAnimation = pulse
        ? {
            animate: {
                boxShadow: [
                    "0 0 20px rgba(79, 70, 229, 0.3)",
                    "0 0 40px rgba(79, 70, 229, 0.5)",
                    "0 0 20px rgba(79, 70, 229, 0.3)",
                ],
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        }
        : {};

    const content = (
        <>
            {children}
            {variant === "primary" && (
                <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-10" />
            )}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedStyles}
                aria-label={ariaLabel}
                {...motionProps}
                {...pulseAnimation}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedStyles}
            onClick={onClick}
            aria-label={ariaLabel}
            {...motionProps}
            {...pulseAnimation}
        >
            {content}
        </motion.button>
    );
}
