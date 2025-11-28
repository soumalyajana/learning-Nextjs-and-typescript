"use client";

import { Calendar, Clock, Dumbbell, RefreshCw, CheckCircle2, ChevronRight } from "lucide-react";
import { CoachFormData } from "./AICoachForm";

export type WorkoutDay = {
    day: string;
    focus: string;
    exercises: { name: string; sets: string; reps: string }[];
    duration: string;
};

interface AICoachResultProps {
    plan: WorkoutDay[];
    userData: CoachFormData;
    onReset: () => void;
}

export default function AICoachResult({ plan, userData, onReset }: AICoachResultProps) {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h2 className="text-3xl font-bold">Your Personalized Plan</h2>
                    <p className="text-muted-foreground mt-1">
                        Based on your goal to <span className="text-primary font-medium">{userData.goal}</span>
                    </p>
                </div>
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-sm font-medium"
                >
                    <RefreshCw size={16} />
                    Generate New Plan
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plan.map((day, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Dumbbell size={80} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                                    {day.day}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock size={12} />
                                    {day.duration}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4">{day.focus}</h3>

                            <div className="space-y-3">
                                {day.exercises.map((ex, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm">
                                        <div className="mt-1 text-primary">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-foreground">{ex.name}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {ex.sets} sets × {ex.reps}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-secondary/50 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                                Start Workout <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
