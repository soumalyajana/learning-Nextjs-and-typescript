"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import AICoachForm, { CoachFormData } from "../components/AICoachForm";
import AICoachResult, { WorkoutDay } from "../components/AICoachResult";

export default function AICoachPage() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [plan, setPlan] = useState<WorkoutDay[] | null>(null);
    const [userData, setUserData] = useState<CoachFormData | null>(null);

    const generatePlan = async (data: CoachFormData) => {
        setIsGenerating(true);
        setUserData(data);

        // Simulate AI processing time
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mock plan generation logic based on goal
        const newPlan: WorkoutDay[] = [];
        const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

        for (let i = 0; i < data.days; i++) {
            let focus = "Full Body";
            let exercises = [
                { name: "Squats", sets: "3", reps: "10-12" },
                { name: "Push-ups", sets: "3", reps: "12-15" },
                { name: "Rows", sets: "3", reps: "10-12" },
            ];

            if (data.goal === "Build Muscle") {
                const split = ["Push Day", "Pull Day", "Leg Day", "Upper Body", "Lower Body"];
                focus = split[i % split.length];
                if (focus.includes("Push")) {
                    exercises = [
                        { name: "Bench Press", sets: "4", reps: "8-10" },
                        { name: "Overhead Press", sets: "3", reps: "8-12" },
                        { name: "Tricep Dips", sets: "3", reps: "12-15" },
                    ];
                } else if (focus.includes("Pull")) {
                    exercises = [
                        { name: "Deadlifts", sets: "3", reps: "5-8" },
                        { name: "Pull-ups", sets: "3", reps: "AMRAP" },
                        { name: "Bicep Curls", sets: "3", reps: "10-12" },
                    ];
                } else {
                    exercises = [
                        { name: "Squats", sets: "4", reps: "6-8" },
                        { name: "Lunges", sets: "3", reps: "10-12" },
                        { name: "Calf Raises", sets: "4", reps: "15-20" },
                    ];
                }
            } else if (data.goal === "Lose Weight") {
                focus = "HIIT & Cardio";
                exercises = [
                    { name: "Burpees", sets: "4", reps: "30 sec" },
                    { name: "Mountain Climbers", sets: "4", reps: "45 sec" },
                    { name: "Jump Rope", sets: "5", reps: "1 min" },
                ];
            }

            newPlan.push({
                day: days[i],
                focus,
                exercises,
                duration: data.duration,
            });
        }

        setPlan(newPlan);
        setIsGenerating(false);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Persistent Header */}
            <div className="flex items-center gap-3 border-b border-border pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles size={24} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">AI Smart Coach</h1>
                    <p className="text-muted-foreground">
                        Scientifically backed workout plans tailored to your goals.
                    </p>
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {plan && userData ? (
                    <AICoachResult
                        plan={plan}
                        userData={userData}
                        onReset={() => setPlan(null)}
                    />
                ) : (
                    <div className="max-w-2xl mx-auto py-8">
                        <AICoachForm onSubmit={generatePlan} isGenerating={isGenerating} />
                    </div>
                )}
            </div>
        </div>
    );
}
