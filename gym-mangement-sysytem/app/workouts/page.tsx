export default function WorkoutsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Workouts</h1>
                <p className="text-muted-foreground">Manage workout plans and exercises.</p>
            </div>
            <div className="flex h-[50vh] items-center justify-center rounded-xl border border-dashed border-border bg-card">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Coming Soon</h2>
                    <p className="text-muted-foreground">This feature is under development.</p>
                </div>
            </div>
        </div>
    );
}
