"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const features = [
    {
        icon: "📊",
        title: "Real-Time Progress Tracking",
        description: "Monitor your child's learning journey with detailed analytics and weekly progress reports.",
        color: "#4F46E5",
    },
    {
        icon: "📚",
        title: "Curriculum Aligned",
        description: "All content is aligned with NCERT and state board curricula for grades 4-6.",
        color: "#10B981",
    },
    {
        icon: "🧠",
        title: "Proven Learning Outcomes",
        description: "Students show significant improvement in subject understanding within the first months.",
        color: "#F97316",
    },
    {
        icon: "🔒",
        title: "Safe & Ad-Free",
        description: "100% safe environment with no ads, no external links, and COPPA compliant.",
        color: "#EC4899",
    },
    {
        icon: "👩‍🏫",
        title: "Teacher Approved",
        description: "Content developed and reviewed by experienced educators and child psychologists.",
        color: "#8B5CF6",
    },
    {
        icon: "📱",
        title: "Learn Anywhere",
        description: "Access on any device - tablet, phone, or computer. Sync progress across all devices.",
        color: "#06B6D4",
    },
];

const stats = [
    { number: "High", label: "Parent Satisfaction" },
    { number: "Many", label: "Lessons Completed" },
    { number: "Real", label: "Grade Improvement" },
    { number: "Top", label: "App Store Rating" },
];

export default function TrustSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-padding bg-white relative overflow-hidden"
            id="parents"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
                    >
                        👨‍👩‍👧 For Parents & Teachers
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        Learning You Can Trust
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We take education seriously while making it fun. Here&apos;s why parents and teachers choose us.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={fadeInUp}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                                style={{ background: `${feature.color}15` }}
                            >
                                {feature.icon}
                            </div>
                            <h3
                                className="text-lg font-bold text-gray-800 mb-2"
                                style={{ fontFamily: "var(--font-nunito)" }}
                            >
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <div
                                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                                    style={{ fontFamily: "var(--font-nunito)" }}
                                >
                                    {stat.number}
                                </div>
                                <div className="text-purple-200 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-8"
                >
                    <TrustBadge icon="🛡️" text="COPPA Compliant" />
                    <TrustBadge icon="✅" text="Curriculum Aligned" />
                    <TrustBadge icon="🔐" text="SSL Secured" />
                </motion.div>
            </div>
        </section>
    );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-medium text-gray-700">{text}</span>
        </div>
    );
}
