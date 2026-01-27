"use client";

import { motion } from "framer-motion";

interface BadgeProps {
    icon: string;
    title: string;
    unlocked?: boolean;
    size?: "sm" | "md" | "lg";
    color?: string;
}

export default function Badge({
    icon,
    title,
    unlocked = true,
    size = "md",
    color = "#FBBF24",
}: BadgeProps) {
    const sizes = {
        sm: { badge: "w-12 h-12", icon: "text-xl", title: "text-xs" },
        md: { badge: "w-16 h-16", icon: "text-2xl", title: "text-sm" },
        lg: { badge: "w-20 h-20", icon: "text-3xl", title: "text-base" },
    };

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
            }}
            whileHover={{ scale: 1.1, y: -5 }}
        >
            {/* Badge circle */}
            <motion.div
                className={`
          ${sizes[size].badge}
          rounded-full
          flex items-center justify-center
          shadow-lg
          relative
          ${!unlocked ? "grayscale opacity-50" : ""}
        `}
                style={{
                    background: unlocked
                        ? `linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -20)} 100%)`
                        : "#CBD5E1",
                }}
                whileHover={
                    unlocked
                        ? {
                            boxShadow: `0 0 30px ${color}66`,
                        }
                        : {}
                }
            >
                {/* Inner glow */}
                <div
                    className="absolute inset-1 rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle at 30% 30%, white 0%, transparent 70%)",
                    }}
                />

                {/* Icon */}
                <span className={`${sizes[size].icon} relative z-10`}>{icon}</span>

                {/* Lock overlay for locked badges */}
                {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                        <span className="text-white text-lg">🔒</span>
                    </div>
                )}
            </motion.div>

            {/* Title */}
            <span
                className={`
          ${sizes[size].title}
          font-semibold text-gray-700 text-center
          max-w-[80px]
        `}
                style={{ fontFamily: "var(--font-nunito)" }}
            >
                {title}
            </span>
        </motion.div>
    );
}

// Helper function to adjust color brightness
function adjustColor(color: string, amount: number): string {
    const hex = color.replace("#", "");
    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

// XP Badge variant
interface XPBadgeProps {
    xp: number;
    level: number;
}

export function XPBadge({ xp, level }: XPBadgeProps) {
    return (
        <motion.div
            className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-center gap-1">
                <span className="text-xl">⭐</span>
                <span className="font-bold">{xp.toLocaleString()} XP</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-1">
                <span className="text-lg">🎖️</span>
                <span className="font-semibold">Level {level}</span>
            </div>
        </motion.div>
    );
}
