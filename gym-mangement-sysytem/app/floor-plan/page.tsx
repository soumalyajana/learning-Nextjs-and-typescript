import FloorPlanMap from "../components/FloorPlanMap";

export default function FloorPlanPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Gym Floor Plan</h1>
                <p className="text-muted-foreground">Real-time monitoring of equipment usage and status.</p>
            </div>

            <FloorPlanMap />
        </div>
    );
}
