"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ProgressBarProps {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    color?: string;
    size?: "sm" | "md" | "lg";
    animated?: boolean;
}

export default function ProgressBar({
    value,
    max = 100,
    label,
    showValue = true,
    color = "#4F46E5",
    size = "md",
    animated = true,
}: ProgressBarProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const percentage = Math.min((value / max) * 100, 100);

    const sizes = {
        sm: { bar: "h-2", text: "text-xs" },
        md: { bar: "h-3", text: "text-sm" },
        lg: { bar: "h-4", text: "text-base" },
    };

    return (
        <div ref={ref} className="w-full">
            {/* Label and value */}
            {(label || showValue) && (
                <div className="flex justify-between items-center mb-2">
                    {label && (
                        <span
                            className={`font-semibold text-gray-700 ${sizes[size].text}`}
                            style={{ fontFamily: "var(--font-nunito)" }}
                        >
                            {label}
                        </span>
                    )}
                    {showValue && (
                        <span className={`font-bold ${sizes[size].text}`} style={{ color }}>
                            {value.toLocaleString()} / {max.toLocaleString()}
                        </span>
                    )}
                </div>
            )}

            {/* Progress track */}
            <div
                className={`
          w-full ${sizes[size].bar}
          bg-gray-200 rounded-full
          overflow-hidden
          relative
        `}
            >
                {/* Progress fill */}
                <motion.div
                    className={`h-full rounded-full relative overflow-hidden`}
                    style={{
                        background: `linear-gradient(90deg, ${color} 0%, ${adjustColor(color, 30)} 100%)`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={
                        animated
                            ? { duration: 1.5, ease: "easeOut", delay: 0.2 }
                            : { duration: 0 }
                    }
                >
                    {/* Shimmer effect */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                            animation: "shimmer 2s infinite linear",
                        }}
                    />
                </motion.div>

                {/* Milestone markers */}
                <div className="absolute inset-0 flex justify-between items-center px-1">
                    {[25, 50, 75].map((milestone) => (
                        <div
                            key={milestone}
                            className="w-0.5 h-full bg-white/30"
                            style={{ marginLeft: `${milestone}%` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Circular progress variant
interface CircularProgressProps {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    showValue?: boolean;
    label?: string;
}

export function CircularProgress({
    value,
    max = 100,
    size = 120,
    strokeWidth = 8,
    color = "#4F46E5",
    showValue = true,
    label,
}: CircularProgressProps) {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [animatedValue, setAnimatedValue] = useState(0);

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const percentage = (animatedValue / max) * 100;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    useEffect(() => {
        if (isInView) {
            const duration = 1500;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);

                setAnimatedValue(Math.round(value * easeOut));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative" style={{ width: size, height: size }}>
                <svg
                    ref={ref}
                    width={size}
                    height={size}
                    className="transform -rotate-90"
                >
                    {/* Background circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth={strokeWidth}
                    />

                    {/* Progress circle */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{
                            filter: `drop-shadow(0 0 6px ${color}66)`,
                        }}
                    />
                </svg>

                {/* Center value */}
                {showValue && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span
                            className="text-2xl font-bold"
                            style={{ color, fontFamily: "var(--font-nunito)" }}
                        >
                            {animatedValue}%
                        </span>
                    </div>
                )}
            </div>

            {label && (
                <span
                    className="text-sm font-semibold text-gray-600"
                    style={{ fontFamily: "var(--font-nunito)" }}
                >
                    {label}
                </span>
            )}
        </div>
    );
}

// Helper function
function adjustColor(color: string, amount: number): string {
    const hex = color.replace("#", "");
    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
