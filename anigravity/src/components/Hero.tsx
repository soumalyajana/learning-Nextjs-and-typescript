"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Floating Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-violet/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-indigo/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-skyblue/20 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-violet" />
                        <span className="text-sm text-gray-300">Introducing New Vibe Design</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white mb-6 leading-tight">
                        Build Stunning Web
                        <br />
                        <span className="bg-gradient-to-r from-violet via-indigo to-skyblue bg-clip-text text-transparent">
                            Experiences Effortlessly
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                        Powered by Next.js and Anigravity&apos;s New Vibe Coding Engine.
                        <br />
                        Create premium, animated interfaces in minutes.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-violet via-indigo to-skyblue rounded-2xl text-white font-semibold text-lg shadow-lg"
                        >
                            Start Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            View Components
                        </motion.button>
                    </div>
                </motion.div>

                {/* Animated Code Window Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex items-center space-x-3">
                                <Code2 className="w-5 h-5 text-violet" />
                                <span className="text-gray-400">const</span>
                                <span className="text-skyblue">magic</span>
                                <span className="text-gray-400">=</span>
                                <span className="text-green-400">&quot;New Vibe Design&quot;</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Zap className="w-5 h-5 text-indigo" />
                                <span className="text-gray-400">export default</span>
                                <span className="text-violet">StunningUI</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
