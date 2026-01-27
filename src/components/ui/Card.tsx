"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    gradient?: string;
    icon?: React.ReactNode;
    hoverEffect?: "lift" | "tilt" | "glow" | "none";
    onClick?: () => void;
}

export default function Card({
    children,
    className = "",
    gradient,
    icon,
    hoverEffect = "lift",
    onClick,
}: CardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (hoverEffect !== "tilt") return;

        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const hoverVariants = {
        lift: {
            rest: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
            hover: {
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring" as const, stiffness: 400, damping: 20 },
            },
        },
        glow: {
            rest: { boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
            hover: {
                boxShadow: "0 0 40px rgba(79, 70, 229, 0.3)",
                transition: { duration: 0.3 },
            },
        },
        none: {
            rest: {},
            hover: {},
        },
    };

    const getHoverProps = () => {
        if (hoverEffect === "tilt") {
            return {
                style: {
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformPerspective: 1000,
                },
                whileHover: { scale: 1.02 },
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseLeave,
            };
        }

        return {
            initial: "rest",
            whileHover: "hover",
            variants: hoverVariants[hoverEffect] || hoverVariants.lift,
        };
    };

    return (
        <motion.div
            className={`
        relative overflow-hidden
        rounded-2xl
        bg-white/80 backdrop-blur-xl
        border border-white/20
        shadow-lg
        transition-colors duration-300
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
            onClick={onClick}
            {...getHoverProps()}
        >
            {/* Gradient overlay */}
            {gradient && (
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ background: gradient }}
                />
            )}

            {/* Icon badge */}
            {icon && (
                <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center text-3xl">
                    {icon}
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%)",
                        transform: "translateX(-100%)",
                        animation: "none",
                    }}
                />
            </div>
        </motion.div>
    );
}

// Subject Card variant
interface SubjectCardProps {
    title: string;
    description: string;
    icon: string;
    color: string;
    games: number;
    onClick?: () => void;
}

export function SubjectCard({
    title,
    description,
    icon,
    color,
    games,
    onClick,
}: SubjectCardProps) {
    return (
        <Card hoverEffect="tilt" onClick={onClick} className="p-6">
            {/* Icon container with gradient background */}
            <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg"
                style={{ background: color }}
            >
                {icon}
            </div>

            {/* Title */}
            <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-nunito)" }}
            >
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            {/* Games count badge */}
            <div className="flex items-center gap-2">
                <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: color }}
                >
                    {games}+ Games
                </span>
            </div>
        </Card>
    );
}
