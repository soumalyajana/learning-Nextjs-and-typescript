"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Designer",
        avatar: "SJ",
        text: "Anigravity's New Vibe Design transformed our product. The animations are buttery smooth!",
    },
    {
        name: "Michael Chen",
        role: "Frontend Developer",
        avatar: "MC",
        text: "Best design system I've used. Clean code, beautiful UI, and incredible performance.",
    },
    {
        name: "Emily Rodriguez",
        role: "Startup Founder",
        avatar: "ER",
        text: "We launched our MVP in record time. The components are production-ready and stunning.",
    },
    {
        name: "David Kim",
        role: "UI/UX Designer",
        avatar: "DK",
        text: "The glassmorphism and gradient effects are next-level. Our clients love the modern look.",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
                        What People <span className="bg-gradient-to-r from-violet to-skyblue bg-clip-text text-transparent">Say</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Trusted by designers and developers worldwide.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="flex overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: index === currentIndex ? 1 : 0,
                                    x: index === currentIndex ? 0 : 100,
                                    display: index === currentIndex ? "block" : "none",
                                }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex-shrink-0"
                            >
                                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                                    <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-violet to-indigo rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {testimonial.avatar}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? "bg-violet w-8"
                                    : "bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
