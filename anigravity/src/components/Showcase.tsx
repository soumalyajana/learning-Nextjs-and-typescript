"use client";

import { motion } from "framer-motion";

const showcaseItems = [
    { id: 1, title: "Dashboard UI", color: "from-violet to-indigo" },
    { id: 2, title: "Landing Page", color: "from-indigo to-skyblue" },
    { id: 3, title: "E-commerce", color: "from-skyblue to-violet" },
    { id: 4, title: "Portfolio", color: "from-violet to-skyblue" },
    { id: 5, title: "SaaS Platform", color: "from-indigo to-violet" },
    { id: 6, title: "Mobile App", color: "from-skyblue to-indigo" },
];

export default function Showcase() {
    return (
        <section id="showcase" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
                        Beautiful <span className="bg-gradient-to-r from-violet to-skyblue bg-clip-text text-transparent">Showcase</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore stunning projects built with New Vibe Design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <div className={`aspect-video bg-gradient-to-br ${item.color} p-8 flex items-center justify-center`}>
                                <h3 className="text-2xl font-heading font-bold text-white text-center">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold">View Project</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
