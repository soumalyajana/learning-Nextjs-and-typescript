import WorkoutCard from "../components/WorkoutCard";

export default function WorkoutsPage() {
    const workouts = [
        {
            title: "Full Body Crush",
            duration: "45 min",
            level: "Intermediate" as const,
            muscles: ["Chest", "Back", "Legs", "Abs"],
            description: "A comprehensive full-body workout designed to hit every major muscle group for maximum calorie burn.",
        },
        {
            title: "HIIT Cardio Blast",
            duration: "30 min",
            level: "Advanced" as const,
            muscles: ["Cardio", "Legs", "Core"],
            description: "High-intensity interval training to boost your metabolism and improve cardiovascular endurance.",
        },
        {
            title: "Strength Builder",
            duration: "60 min",
            level: "Beginner" as const,
            muscles: ["Arms", "Shoulders", "Chest"],
            description: "Focus on building foundational strength with compound movements and controlled reps.",
        },
        {
            title: "Core Crusher",
            duration: "20 min",
            level: "Intermediate" as const,
            muscles: ["Abs", "Obliques", "Lower Back"],
            description: "Intense core session to carve out those abs and strengthen your midsection.",
        },
        {
            title: "Leg Day from Hell",
            duration: "50 min",
            level: "Advanced" as const,
            muscles: ["Quads", "Hamstrings", "Glutes", "Calves"],
            description: "Prepare to walk funny tomorrow. This leg workout pushes your lower body to the limit.",
        },
        {
            title: "Yoga Flow",
            duration: "40 min",
            level: "Beginner" as const,
            muscles: ["Full Body", "Flexibility", "Balance"],
            description: "Relax and recover with this soothing yoga flow focused on flexibility and mindfulness.",
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Workout Plans</h1>
                <p className="text-muted-foreground">Select a workout plan to start your session.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout, index) => (
                    <WorkoutCard key={index} {...workout} />
                ))}
            </div>
        </div>
    );
}

