"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
    {
        name: "Starter",
        price: "$29",
        period: "/month",
        features: [
            "5 Projects",
            "Basic Components",
            "Community Support",
            "Monthly Updates",
        ],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "$79",
        period: "/month",
        features: [
            "Unlimited Projects",
            "Premium Components",
            "Priority Support",
            "Weekly Updates",
            "Advanced Animations",
            "Custom Themes",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "$199",
        period: "/month",
        features: [
            "Everything in Pro",
            "Dedicated Support",
            "Custom Development",
            "White Label",
            "SLA Guarantee",
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
                        Simple <span className="bg-gradient-to-r from-violet to-skyblue bg-clip-text text-transparent">Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect plan for your needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`relative backdrop-blur-lg rounded-2xl p-8 ${plan.highlighted
                                    ? "bg-gradient-to-br from-violet/20 to-indigo/20 border-2 border-violet shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                                    : "bg-white/5 border border-white/10"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet to-indigo rounded-full text-white text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                {plan.name}
                            </h3>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-400">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-3">
                                        <div className="w-5 h-5 bg-gradient-to-br from-violet to-indigo rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.highlighted
                                        ? "bg-gradient-to-r from-violet to-indigo text-white shadow-lg"
                                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                    }`}
                            >
                                Get Started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
