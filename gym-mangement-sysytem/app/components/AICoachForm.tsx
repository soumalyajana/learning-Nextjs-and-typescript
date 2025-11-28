"use client";

import { useState } from "react";
import { Dumbbell, Clock, Calendar, Target, Activity } from "lucide-react";
import { clsx } from "clsx";

export type CoachFormData = {
    goal: string;
    level: string;
    days: number;
    equipment: string;
    duration: string;
};

interface AICoachFormProps {
    onSubmit: (data: CoachFormData) => void;
    isGenerating: boolean;
}

export default function AICoachForm({ onSubmit, isGenerating }: AICoachFormProps) {
    const [formData, setFormData] = useState<CoachFormData>({
        goal: "Build Muscle",
        level: "Intermediate",
        days: 4,
        equipment: "Gym Access",
        duration: "60 min",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const goals = [
        { id: "Build Muscle", icon: Dumbbell, desc: "Hypertrophy & Strength" },
        { id: "Lose Weight", icon: Activity, desc: "High Calorie Burn" },
        { id: "Endurance", icon: Clock, desc: "Cardio & Stamina" },
        { id: "Flexibility", icon: Target, desc: "Mobility & Core" },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Tell us about your goals</h2>
                <p className="text-muted-foreground">
                    Our AI will craft a personalized workout plan just for you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Goal Selection */}
                <div className="space-y-4">
                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Primary Goal
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {goals.map((goal) => (
                            <button
                                key={goal.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, goal: goal.id })}
                                className={clsx(
                                    "flex items-center gap-4 p-4 rounded-xl border transition-all text-left",
                                    formData.goal === goal.id
                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                        : "border-border bg-card hover:border-primary/50 hover:bg-secondary/50"
                                )}
                            >
                                <div
                                    className={clsx(
                                        "p-3 rounded-lg",
                                        formData.goal === goal.id
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-muted-foreground"
                                    )}
                                >
                                    <goal.icon size={20} />
                                </div>
                                <div>
                                    <div className="font-semibold">{goal.id}</div>
                                    <div className="text-xs text-muted-foreground">{goal.desc}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {/* Experience Level */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Experience Level
                        </label>
                        <select
                            value={formData.level}
                            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                    {/* Equipment */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Equipment Access
                        </label>
                        <select
                            value={formData.equipment}
                            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                            <option>Gym Access</option>
                            <option>Dumbbells Only</option>
                            <option>Bodyweight Only</option>
                            <option>Home Gym</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {/* Days Per Week */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Days Per Week: {formData.days}
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="7"
                            step="1"
                            value={formData.days}
                            onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) })}
                            className="w-full accent-primary h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground px-1">
                            <span>1</span>
                            <span>7</span>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Duration Per Session
                        </label>
                        <div className="flex gap-2">
                            {["30 min", "45 min", "60 min", "90 min"].map((time) => (
                                <button
                                    key={time}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, duration: time })}
                                    className={clsx(
                                        "flex-1 py-2 px-1 rounded-lg text-sm font-medium transition-colors border",
                                        formData.duration === time
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "bg-card text-muted-foreground border-border hover:bg-secondary"
                                    )}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isGenerating ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Generating Plan...
                        </span>
                    ) : (
                        "Generate Workout Plan"
                    )}
                </button>
            </form>
        </div>
    );
}
