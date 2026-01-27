"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Subjects", href: "#subjects" },
    { label: "Rewards", href: "#rewards" },
    { label: "For Parents", href: "#parents" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-lg"
                        : "bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-xl">🦉</span>
                            </div>
                            <span
                                className={`text-xl font-bold hidden sm:block ${isScrolled ? "text-gray-800" : "text-gray-800"
                                    }`}
                                style={{ fontFamily: "var(--font-nunito)" }}
                            >
                                LearnQuest
                            </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isScrolled
                                            ? "text-gray-600 hover:text-purple-600"
                                            : "text-gray-700 hover:text-purple-600"
                                        }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <motion.a
                                href="#"
                                className={`text-sm font-medium ${isScrolled ? "text-gray-600" : "text-gray-700"
                                    } hover:text-purple-600 transition-colors`}
                                whileHover={{ scale: 1.05 }}
                            >
                                Log In
                            </motion.a>
                            <Button variant="primary" size="sm">
                                Start Free
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                className={`w-6 h-0.5 rounded-full transition-colors ${isScrolled ? "bg-gray-800" : "bg-gray-800"
                                    }`}
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 8 : 0,
                                }}
                            />
                            <motion.span
                                className={`w-6 h-0.5 rounded-full transition-colors ${isScrolled ? "bg-gray-800" : "bg-gray-800"
                                    }`}
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                            />
                            <motion.span
                                className={`w-6 h-0.5 rounded-full transition-colors ${isScrolled ? "bg-gray-800" : "bg-gray-800"
                                    }`}
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -8 : 0,
                                }}
                            />
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <motion.div
                className="fixed inset-0 z-40 md:hidden"
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none",
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu panel */}
                <motion.div
                    className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl"
                    initial={{ x: "100%" }}
                    animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                    <div className="p-6 pt-20">
                        {/* Nav links */}
                        <nav className="flex flex-col gap-4 mb-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-700 hover:text-purple-600 py-2 border-b border-gray-100"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: isMobileMenuOpen ? 1 : 0,
                                        x: isMobileMenuOpen ? 0 : 20,
                                    }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA buttons */}
                        <div className="flex flex-col gap-3">
                            <Button variant="primary" size="md" className="w-full">
                                Start Free Trial
                            </Button>
                            <Button variant="secondary" size="md" className="w-full">
                                Log In
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
