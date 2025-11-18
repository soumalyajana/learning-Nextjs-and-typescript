"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-6 inset-x-0 z-50 px-6 flex justify-center"
        >
            <div className="w-full max-w-7xl">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-lg">
                    <div className="flex md:grid md:grid-cols-3 items-center justify-between w-full">
                        {/* Logo */}
                        <div className="flex justify-start">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-violet to-indigo rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">A</span>
                                </div>
                                <span className="text-white font-heading font-bold text-xl hidden sm:block">
                                    Anigravity
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Links - Centered via Grid */}
                        <div className="hidden md:flex items-center justify-center gap-8">
                            <Link
                                href="#home"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="#features"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                Features
                            </Link>
                            <Link
                                href="#showcase"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                Showcase
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#contact"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* CTA Button & Theme Toggle */}
                        <div className="flex justify-end items-center gap-4">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-violet" />
                                    )}
                                </button>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-8 py-3 bg-gradient-to-r from-violet via-indigo to-skyblue rounded-xl text-white font-semibold overflow-hidden group flex items-center justify-center shadow-lg "
                            >
                                <span className="relative z-10 ">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-skyblue via-indigo to-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
