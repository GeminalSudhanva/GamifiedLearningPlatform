"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp, floatingSlow } from "@/lib/animations";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 50%, #C7D2FE 100%)",
            }}
        >
            {/* Parallax Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Clouds */}
                <motion.div
                    className="absolute top-20 left-[10%]"
                    style={{ y: y1 }}
                >
                    <Cloud size={120} opacity={0.6} />
                </motion.div>
                <motion.div
                    className="absolute top-40 right-[15%]"
                    style={{ y: y2 }}
                >
                    <Cloud size={100} opacity={0.4} />
                </motion.div>
                <motion.div
                    className="absolute top-60 left-[60%]"
                    style={{ y: y1 }}
                >
                    <Cloud size={80} opacity={0.5} />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    className="absolute top-[20%] right-[20%]"
                    variants={floatingSlow}
                    initial="initial"
                    animate="animate"
                >
                    <FloatingElement emoji="⭐" size={50} delay={0} />
                </motion.div>
                <motion.div
                    className="absolute top-[30%] left-[15%]"
                    variants={floatingSlow}
                    initial="initial"
                    animate="animate"
                >
                    <FloatingElement emoji="🎮" size={60} delay={1} />
                </motion.div>
                <motion.div
                    className="absolute bottom-[30%] right-[10%]"
                    variants={floatingSlow}
                    initial="initial"
                    animate="animate"
                >
                    <FloatingElement emoji="🏆" size={55} delay={2} />
                </motion.div>
                <motion.div
                    className="absolute bottom-[25%] left-[8%]"
                    variants={floatingSlow}
                    initial="initial"
                    animate="animate"
                >
                    <FloatingElement emoji="📚" size={45} delay={0.5} />
                </motion.div>
                <motion.div
                    className="absolute top-[50%] right-[5%]"
                    variants={floatingSlow}
                    initial="initial"
                    animate="animate"
                >
                    <FloatingElement emoji="🎯" size={40} delay={1.5} />
                </motion.div>

                {/* Decorative shapes */}
                <motion.div
                    className="absolute bottom-20 left-[5%]"
                    style={{ y: y3 }}
                >
                    <DecorativeShape color="#FBBF24" size={80} />
                </motion.div>
                <motion.div
                    className="absolute top-40 right-[5%]"
                    style={{ y: y2 }}
                >
                    <DecorativeShape color="#10B981" size={60} />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Mascot character */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8"
                    >
                        <Mascot />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
                    >
                        <span className="text-lg">🎉</span>
                        <span className="text-sm font-semibold text-gray-700">
                            Trusted by Students Everywhere
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        <span className="text-gray-800">Learn, Play & </span>
                        <span className="gradient-text">Level Up!</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl ml-2">🎮</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Transform homework into epic quests! Master Math, Science, English & more
                        through exciting games, earn XP, unlock badges, and compete on leaderboards.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                    >
                        <Button variant="primary" size="lg" pulse>
                            🚀 Start Learning Free
                        </Button>
                        <Button variant="secondary" size="lg">
                            👨‍👩‍👧 For Parents
                        </Button>
                    </motion.div>


                </motion.div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                >
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}

// Mascot Component
function Mascot() {
    return (
        <motion.div
            className="relative"
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {/* Mascot body */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                {/* Main character */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-3xl shadow-xl flex items-center justify-center transform rotate-3">
                    <span className="text-6xl sm:text-7xl">🦉</span>
                </div>

                {/* Floating book */}
                <motion.div
                    className="absolute -right-4 -top-4 text-3xl"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    📖
                </motion.div>

                {/* Sparkles */}
                <motion.div
                    className="absolute -left-3 top-0 text-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ✨
                </motion.div>
                <motion.div
                    className="absolute -right-2 bottom-4 text-lg"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                    ✨
                </motion.div>
            </div>
        </motion.div>
    );
}

// Floating Element Component
function FloatingElement({
    emoji,
    size,
    delay,
}: {
    emoji: string;
    size: number;
    delay: number;
}) {
    return (
        <motion.div
            className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            style={{ width: size, height: size }}
            animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
            whileHover={{ scale: 1.2 }}
        >
            <span style={{ fontSize: size * 0.5 }}>{emoji}</span>
        </motion.div>
    );
}

// Cloud Component
function Cloud({ size, opacity }: { size: number; opacity: number }) {
    return (
        <motion.div
            style={{ opacity }}
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg
                width={size}
                height={size * 0.6}
                viewBox="0 0 100 60"
                fill="white"
            >
                <ellipse cx="25" cy="40" rx="20" ry="15" />
                <ellipse cx="50" cy="30" rx="25" ry="20" />
                <ellipse cx="75" cy="40" rx="20" ry="15" />
                <ellipse cx="40" cy="45" rx="15" ry="10" />
                <ellipse cx="60" cy="45" rx="15" ry="10" />
            </svg>
        </motion.div>
    );
}

// Decorative Shape Component
function DecorativeShape({ color, size }: { color: string; size: number }) {
    return (
        <motion.div
            className="rounded-full opacity-20"
            style={{
                width: size,
                height: size,
                background: color,
            }}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}
