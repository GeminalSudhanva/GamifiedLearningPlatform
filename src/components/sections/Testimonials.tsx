"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const testimonials = [
    {
        id: 1,
        type: "student",
        name: "Aarav K.",
        role: "5th Grade Student",
        avatar: "🦊",
        content: "Learning math is so fun now! I love collecting badges and competing with my friends on the leaderboard. I actually look forward to studying!",
        rating: 5,
        color: "#8B5CF6",
    },
    {
        id: 2,
        type: "parent",
        name: "Priya M.",
        role: "Parent of 2",
        avatar: "👩",
        content: "My kids went from dreading homework to asking for 'just one more game.' The progress reports help me track their improvement easily.",
        rating: 5,
        color: "#10B981",
    },
    {
        id: 3,
        type: "teacher",
        name: "Rajesh T.",
        role: "Science Teacher",
        avatar: "👨‍🏫",
        content: "The curriculum alignment is excellent. My students are more engaged in class because they've already explored concepts through the games.",
        rating: 5,
        color: "#3B82F6",
    },
    {
        id: 4,
        type: "student",
        name: "Ananya S.",
        role: "4th Grade Student",
        avatar: "🐱",
        content: "The science experiments are like magic! I learned about plants and now I'm growing my own at home. Science is the best!",
        rating: 5,
        color: "#F97316",
    },
    {
        id: 5,
        type: "parent",
        name: "Vikram P.",
        role: "Parent",
        avatar: "👨",
        content: "The platform is completely safe and ad-free. I can let my daughter use it without worrying. Her grades have improved significantly.",
        rating: 5,
        color: "#EC4899",
    },
    {
        id: 6,
        type: "teacher",
        name: "Sunita D.",
        role: "Math Teacher",
        avatar: "👩‍🏫",
        content: "I recommend LearnQuest to all my students. The gamified approach helps them grasp difficult concepts like fractions much faster.",
        rating: 5,
        color: "#06B6D4",
    },
];

export default function Testimonials() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 1, 1] as const,
            },
        }),
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    return (
        <section
            ref={ref}
            className="section-padding relative overflow-hidden"
            id="testimonials"
            style={{
                background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 100%)",
            }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-12"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4"
                    >
                        💬 What People Say
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        Loved by Students & Parents
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600"
                    >
                        Join thousands of happy learners!
                    </motion.p>
                </motion.div>

                {/* Testimonial Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative"
                >
                    {/* Carousel container */}
                    <div className="relative h-[320px] sm:h-[280px] overflow-hidden">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                <TestimonialCard testimonial={testimonials[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl transition-all"
                            onClick={handlePrev}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous testimonial"
                        >
                            ←
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-purple-600 w-8"
                                        : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <motion.button
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl transition-all"
                            onClick={handleNext}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next testimonial"
                        >
                            →
                        </motion.button>
                    </div>
                </motion.div>

                {/* Type filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex justify-center gap-4 mt-8"
                >
                    <TypePill emoji="🧑‍🎓" label="Students" active />
                    <TypePill emoji="👨‍👩‍👧" label="Parents" />
                    <TypePill emoji="👩‍🏫" label="Teachers" />
                </motion.div>
            </div>
        </section>
    );
}

// Testimonial Card
function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof testimonials)[0];
}) {
    return (
        <div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full"
        >
            {/* Quote icon */}
            <div className="text-4xl text-purple-200 mb-4">&ldquo;</div>

            {/* Content */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {testimonial.content}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-md"
                    style={{ background: `${testimonial.color}20` }}
                >
                    {testimonial.avatar}
                </div>

                {/* Info */}
                <div className="flex-1">
                    <div
                        className="font-bold text-gray-800"
                        style={{ fontFamily: "var(--font-nunito)" }}
                    >
                        {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                            ★
                        </span>
                    ))}
                </div>
            </div>

            {/* Type badge */}
            <div
                className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ background: testimonial.color }}
            >
                {testimonial.type.charAt(0).toUpperCase() + testimonial.type.slice(1)}
            </div>
        </div>
    );
}

// Type Pill
function TypePill({
    emoji,
    label,
    active = false,
}: {
    emoji: string;
    label: string;
    active?: boolean;
}) {
    return (
        <motion.button
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${active
                ? "bg-purple-100 text-purple-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <span>{emoji}</span>
            <span>{label}</span>
        </motion.button>
    );
}
