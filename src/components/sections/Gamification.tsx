"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

const badges = [
    { icon: "🌟", title: "Star Learner", color: "#FBBF24", unlocked: true },
    { icon: "🎯", title: "Perfect Score", color: "#EF4444", unlocked: true },
    { icon: "📚", title: "Bookworm", color: "#3B82F6", unlocked: true },
    { icon: "🔥", title: "On Fire!", color: "#F97316", unlocked: true },
    { icon: "🧠", title: "Big Brain", color: "#8B5CF6", unlocked: true },
    { icon: "🏃", title: "Speed Runner", color: "#10B981", unlocked: false },
    { icon: "💎", title: "Diamond", color: "#06B6D4", unlocked: false },
    { icon: "🦸", title: "Super Hero", color: "#EC4899", unlocked: false },
];

const leaderboard = [
    { rank: 1, name: "Alex R.", xp: 12450, avatar: "🦊" },
    { rank: 2, name: "Maya S.", xp: 11820, avatar: "🐱" },
    { rank: 3, name: "Jake T.", xp: 11540, avatar: "🐶" },
    { rank: 4, name: "Emma L.", xp: 10890, avatar: "🐰" },
    { rank: 5, name: "You", xp: 9750, avatar: "🦉", isUser: true },
];

export default function Gamification() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-padding relative overflow-hidden"
            id="rewards"
            style={{
                background: "linear-gradient(180deg, #1E1B4B 0%, #312E81 50%, #3730A3 100%)",
            }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating stars - using fixed positions to avoid hydration mismatch */}
                {[
                    { left: 5, top: 10, size: 12, duration: 4, delay: 0 },
                    { left: 15, top: 25, size: 14, duration: 3.5, delay: 0.5 },
                    { left: 25, top: 15, size: 10, duration: 4.5, delay: 1 },
                    { left: 35, top: 35, size: 16, duration: 3, delay: 0.3 },
                    { left: 45, top: 8, size: 11, duration: 5, delay: 0.8 },
                    { left: 55, top: 28, size: 13, duration: 3.8, delay: 1.2 },
                    { left: 65, top: 18, size: 15, duration: 4.2, delay: 0.2 },
                    { left: 75, top: 40, size: 12, duration: 3.3, delay: 0.7 },
                    { left: 85, top: 12, size: 14, duration: 4.8, delay: 1.5 },
                    { left: 92, top: 32, size: 10, duration: 3.6, delay: 0.4 },
                    { left: 10, top: 60, size: 13, duration: 4.1, delay: 1.1 },
                    { left: 30, top: 70, size: 11, duration: 3.4, delay: 0.6 },
                    { left: 50, top: 55, size: 15, duration: 4.6, delay: 1.3 },
                    { left: 70, top: 65, size: 12, duration: 3.2, delay: 0.9 },
                    { left: 88, top: 75, size: 14, duration: 4.4, delay: 1.8 },
                    { left: 20, top: 85, size: 10, duration: 3.7, delay: 0.1 },
                    { left: 40, top: 90, size: 16, duration: 4.3, delay: 1.4 },
                    { left: 60, top: 80, size: 11, duration: 3.9, delay: 0.85 },
                    { left: 80, top: 88, size: 13, duration: 4.7, delay: 1.6 },
                    { left: 95, top: 50, size: 12, duration: 3.1, delay: 1.9 },
                ].map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white text-opacity-20"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            fontSize: `${star.size}px`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                        }}
                    >
                        ✦
                    </motion.div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-semibold mb-4"
                    >
                        🎮 Gamification
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        Earn, Collect & Compete!
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-purple-200 max-w-2xl mx-auto"
                    >
                        Level up your learning journey with XP points, achievements, and leaderboards!
                    </motion.p>
                </motion.div>

                {/* Main grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {/* Left column */}
                    <div className="space-y-8">
                        {/* XP Progress */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-nunito)" }}>
                                    Your Progress
                                </h3>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full">
                                    <span className="text-lg">⭐</span>
                                    <span className="font-bold text-gray-900">Level 12</span>
                                </div>
                            </div>

                            {/* XP Bar */}
                            <div className="mb-6">
                                <div className="flex justify-between text-sm text-purple-200 mb-2">
                                    <span>XP to next level</span>
                                    <span>9,750 / 10,500</span>
                                </div>
                                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "93%" } : { width: 0 }}
                                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <StatBox label="Total XP" value={<AnimatedCounter target={9750} />} icon="⚡" />
                                <StatBox label="Streak" value="15 days" icon="🔥" />
                                <StatBox label="Quests" value="47" icon="📜" />
                            </div>
                        </motion.div>

                        {/* Daily Challenge */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl">⏰</span>
                                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-nunito)" }}>
                                        Daily Challenge
                                    </h3>
                                </div>

                                <p className="text-white/90 mb-4">
                                    Complete 5 Math problems to earn bonus XP!
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl">🏆</span>
                                        <span className="text-white font-bold">+500 XP</span>
                                    </div>
                                    <motion.div
                                        className="bg-white/20 px-4 py-2 rounded-full text-white font-semibold"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        3/5 Done
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-8">
                        {/* Badges */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-nunito)" }}>
                                🏅 Your Badges
                            </h3>
                            <div className="grid grid-cols-4 gap-4">
                                {badges.map((badge, index) => (
                                    <motion.div
                                        key={badge.title}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 15,
                                            delay: 0.5 + index * 0.1,
                                        }}
                                    >
                                        <Badge {...badge} size="sm" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Leaderboard */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-nunito)" }}>
                                    🏆 Leaderboard
                                </h3>
                                <span className="text-sm text-purple-300">This Week</span>
                            </div>

                            <div className="space-y-3">
                                {leaderboard.map((player, index) => (
                                    <motion.div
                                        key={player.rank}
                                        className={`flex items-center gap-4 p-3 rounded-xl ${player.isUser
                                            ? "bg-gradient-to-r from-purple-600/50 to-indigo-600/50 border border-purple-400/30"
                                            : "bg-white/5"
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${player.rank === 1
                                                ? "bg-yellow-400 text-yellow-900"
                                                : player.rank === 2
                                                    ? "bg-gray-300 text-gray-700"
                                                    : player.rank === 3
                                                        ? "bg-orange-400 text-orange-900"
                                                        : "bg-white/10 text-white"
                                                }`}
                                        >
                                            {player.rank}
                                        </div>
                                        <div className="text-2xl">{player.avatar}</div>
                                        <div className="flex-1">
                                            <div className="text-white font-semibold">{player.name}</div>
                                        </div>
                                        <div className="text-yellow-400 font-bold">
                                            {player.xp.toLocaleString()} XP
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Stat Box
function StatBox({
    label,
    value,
    icon,
}: {
    label: string;
    value: React.ReactNode;
    icon: string;
}) {
    return (
        <div className="text-center">
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-nunito)" }}>
                {value}
            </div>
            <div className="text-xs text-purple-300">{label}</div>
        </div>
    );
}

// Animated Counter
function AnimatedCounter({ target }: { target: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 1500;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(Math.round(target * easeOut));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
}
