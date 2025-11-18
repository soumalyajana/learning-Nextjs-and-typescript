"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Palette, Code2 } from "lucide-react";

const features = [
    {
        icon: Rocket,
        title: "Lightning Fast",
        description: "Built on Next.js for blazing-fast performance and optimal user experience.",
    },
    {
        icon: Zap,
        title: "Instant Animations",
        description: "Smooth, buttery animations powered by Framer Motion out of the box.",
    },
    {
        icon: Palette,
        title: "Premium Design",
        description: "Stunning glassmorphism, gradients, and modern aesthetics included.",
    },
    {
        icon: Code2,
        title: "Developer Friendly",
        description: "Clean, maintainable code with TypeScript and best practices.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
                        Powerful <span className="bg-gradient-to-r from-violet to-skyblue bg-clip-text text-transparent">Features</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Everything you need to build modern, stunning web experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)" }}
                            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-violet to-indigo rounded-xl flex items-center justify-center mb-4">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
