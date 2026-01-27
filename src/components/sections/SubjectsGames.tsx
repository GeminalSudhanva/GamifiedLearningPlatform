"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const subjects = [
    {
        id: "math",
        title: "Mathematics",
        description: "Master numbers, algebra & geometry through exciting puzzle games!",
        icon: "🔢",
        color: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
        games: 45,
        skills: ["Addition", "Fractions", "Geometry"],
    },
    {
        id: "science",
        title: "Science",
        description: "Explore physics, chemistry & biology with interactive experiments!",
        icon: "🔬",
        color: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        games: 38,
        skills: ["Experiments", "Nature", "Space"],
    },
    {
        id: "english",
        title: "English",
        description: "Build vocabulary, grammar & reading skills through word adventures!",
        icon: "📚",
        color: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
        games: 52,
        skills: ["Reading", "Writing", "Grammar"],
    },
    {
        id: "social",
        title: "Social Studies",
        description: "Travel through history, geography & civics in immersive quests!",
        icon: "🌍",
        color: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
        games: 35,
        skills: ["History", "Geography", "Civics"],
    },
];

export default function SubjectsGames() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="section-padding relative overflow-hidden"
            id="subjects"
            style={{
                background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
            }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
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
                        className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4"
                    >
                        📖 Choose Your Adventure
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        Subjects & Games
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Pick a subject and dive into hundreds of exciting games designed just for you!
                    </motion.p>
                </motion.div>

                {/* Subject Cards Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {subjects.map((subject, index) => (
                        <motion.div key={subject.id} variants={fadeInUp}>
                            <SubjectCard {...subject} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <StatCard number="170+" label="Fun Games" icon="🎮" />
                    <StatCard number="1000+" label="Lessons" icon="📝" />
                    <StatCard number="500+" label="Quests" icon="🗺️" />
                    <StatCard number="50+" label="Achievements" icon="🏅" />
                </motion.div>
            </div>
        </section>
    );
}

// Subject Card with 3D tilt
function SubjectCard({
    title,
    description,
    icon,
    color,
    games,
    skills,
    index,
}: {
    title: string;
    description: string;
    icon: string;
    color: string;
    games: number;
    skills: string[];
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 cursor-pointer group overflow-hidden"
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
        >
            {/* Gradient overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"
                style={{ background: color }}
            />

            {/* Icon */}
            <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg mx-auto"
                style={{ background: color }}
                whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 },
                }}
            >
                <span className="transform group-hover:scale-110 transition-transform">
                    {icon}
                </span>
            </motion.div>

            {/* Title */}
            <h3
                className="text-lg font-bold text-gray-800 text-center mb-2"
                style={{ fontFamily: "var(--font-nunito)" }}
            >
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                {description}
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Games count */}
            <div
                className="text-center py-2 px-4 rounded-full text-white text-sm font-bold mx-auto inline-flex items-center gap-2 w-full justify-center"
                style={{ background: color }}
            >
                <span>🎮</span>
                <span>{games}+ Games</span>
            </div>

            {/* Hover sparkle */}
            <motion.div
                className="absolute top-2 right-2 text-lg opacity-0 group-hover:opacity-100"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
                ⭐
            </motion.div>
        </motion.div>
    );
}

// Stat Card
function StatCard({
    number,
    label,
    icon,
}: {
    number: string;
    label: string;
    icon: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
        >
            <div className="text-3xl mb-2">{icon}</div>
            <div
                className="text-2xl sm:text-3xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-nunito)" }}
            >
                {number}
            </div>
            <div className="text-gray-600 text-sm">{label}</div>
        </motion.div>
    );
}
