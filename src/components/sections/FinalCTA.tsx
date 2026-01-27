"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function FinalCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-padding relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #4F46E5 0%, #7C3AED 50%, #9333EA 100%)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating elements - using fixed positions to avoid hydration mismatch */}
                {[
                    { left: 5, top: 15, icon: "⭐", xDir: 15, duration: 6, delay: 0 },
                    { left: 15, top: 45, icon: "🎮", xDir: -15, duration: 7, delay: 0.5 },
                    { left: 25, top: 75, icon: "🏆", xDir: 15, duration: 5.5, delay: 1 },
                    { left: 35, top: 25, icon: "📚", xDir: -15, duration: 8, delay: 0.3 },
                    { left: 45, top: 85, icon: "🎯", xDir: 15, duration: 6.5, delay: 0.8 },
                    { left: 55, top: 35, icon: "✨", xDir: -15, duration: 7.5, delay: 1.2 },
                    { left: 65, top: 65, icon: "🌟", xDir: 15, duration: 5, delay: 0.2 },
                    { left: 75, top: 10, icon: "💎", xDir: -15, duration: 8.5, delay: 0.7 },
                    { left: 85, top: 55, icon: "⭐", xDir: 15, duration: 6.2, delay: 1.5 },
                    { left: 92, top: 80, icon: "🎮", xDir: -15, duration: 7.2, delay: 0.4 },
                    { left: 10, top: 90, icon: "🏆", xDir: 15, duration: 5.8, delay: 1.1 },
                    { left: 50, top: 5, icon: "📚", xDir: -15, duration: 6.8, delay: 0.6 },
                    { left: 80, top: 30, icon: "🎯", xDir: 15, duration: 7.8, delay: 1.3 },
                    { left: 20, top: 60, icon: "✨", xDir: -15, duration: 5.3, delay: 0.9 },
                    { left: 70, top: 40, icon: "🌟", xDir: 15, duration: 6.3, delay: 1.8 },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${item.left}%`,
                            top: `${item.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, item.xDir, 0],
                            rotate: [0, 360],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1],
                            delay: item.delay,
                        }}
                    >
                        <span className="text-3xl">{item.icon}</span>
                    </motion.div>
                ))}

                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                    >
                        <span className="text-xl">🎉</span>
                        <span className="text-white font-medium">Start Your Adventure Today!</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        Ready to Make Learning
                        <br />
                        <span className="text-yellow-300">Unforgettable?</span>
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Join 50,000+ students who transformed homework into epic adventures.
                        No credit card required. Start learning for free today!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10"
                    >
                        <motion.button
                            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            animate={{
                                boxShadow: [
                                    "0 10px 30px rgba(0, 0, 0, 0.2)",
                                    "0 20px 50px rgba(255, 255, 255, 0.3)",
                                    "0 10px 30px rgba(0, 0, 0, 0.2)",
                                ],
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            <span>🚀</span>
                            <span>Start Free Trial</span>
                        </motion.button>

                        <motion.button
                            className="inline-flex items-center gap-2 text-white px-6 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Watch Demo</span>
                            <span>▶️</span>
                        </motion.button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-6 text-purple-100"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-green-300">✓</span>
                            <span>Free 7-Day Trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-300">✓</span>
                            <span>No Credit Card</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-300">✓</span>
                            <span>Cancel Anytime</span>
                        </div>
                    </motion.div>

                    {/* App store badges */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 flex flex-wrap items-center justify-center gap-4"
                    >
                        <AppStoreBadge type="apple" />
                        <AppStoreBadge type="google" />
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
                        fill="#0F172A"
                    />
                </svg>
            </div>
        </section>
    );
}

// App Store Badge
function AppStoreBadge({ type }: { type: "apple" | "google" }) {
    return (
        <motion.div
            className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="text-2xl">{type === "apple" ? "🍎" : "▶️"}</span>
            <div className="text-left">
                <div className="text-[10px] text-gray-400">
                    {type === "apple" ? "Download on the" : "GET IT ON"}
                </div>
                <div className="text-sm font-semibold">
                    {type === "apple" ? "App Store" : "Google Play"}
                </div>
            </div>
        </motion.div>
    );
}
