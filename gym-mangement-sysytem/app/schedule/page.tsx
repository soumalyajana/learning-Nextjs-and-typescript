import ScheduleView from "../components/ScheduleView";

export default function SchedulePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Class Schedule</h1>
                <p className="text-muted-foreground">View and manage weekly class schedules.</p>
            </div>
            <ScheduleView />
        </div>
    );
}
