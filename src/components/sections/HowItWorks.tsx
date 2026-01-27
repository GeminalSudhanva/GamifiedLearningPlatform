"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
    {
        number: "01",
        icon: "🎯",
        title: "Pick Your Quest",
        description: "Choose from Math, Science, English or Social Studies. Each subject is a new adventure!",
        color: "#4F46E5",
    },
    {
        number: "02",
        icon: "🎮",
        title: "Play & Learn",
        description: "Dive into fun games and interactive lessons. Learning feels like playing your favorite game!",
        color: "#10B981",
    },
    {
        number: "03",
        icon: "🏆",
        title: "Earn Rewards",
        description: "Collect XP points, unlock cool badges, and climb the leaderboard. Show off your skills!",
        color: "#F97316",
    },
];

export default function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-padding bg-white relative overflow-hidden"
            id="how-it-works"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
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
                        className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
                    >
                        ✨ Simple & Fun
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Start your learning adventure in just 3 easy steps!
                    </motion.p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                >
                    {/* Connection line (desktop only) */}
                    <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-purple-500 via-green-500 to-orange-500 rounded-full opacity-30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={fadeInUp}
                            className="relative"
                        >
                            <StepCard {...step} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-4">Ready to start your adventure?</p>
                    <motion.button
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Get Started Now</span>
                        <span className="text-xl">🚀</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

// Step Card Component
function StepCard({
    number,
    icon,
    title,
    description,
    color,
    index,
}: {
    number: string;
    icon: string;
    title: string;
    description: string;
    color: string;
    index: number;
}) {
    return (
        <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative group"
            whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Step number badge */}
            <div
                className="absolute -top-4 left-8 px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg"
                style={{ background: color }}
            >
                Step {number}
            </div>

            {/* Icon */}
            <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg mx-auto"
                style={{
                    background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                }}
                whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                }}
            >
                {icon}
            </motion.div>

            {/* Content */}
            <h3
                className="text-xl font-bold text-gray-800 mb-3 text-center"
                style={{ fontFamily: "var(--font-nunito)" }}
            >
                {title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
                {description}
            </p>

            {/* Hover effect - sparkle */}
            <motion.div
                className="absolute top-4 right-4 text-xl opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                ✨
            </motion.div>

            {/* Arrow to next step (except last) */}
            {index < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <motion.div
                        className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        →
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
}
