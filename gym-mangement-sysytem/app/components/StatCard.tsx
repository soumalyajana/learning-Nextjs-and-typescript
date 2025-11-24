import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down" | "neutral";
    icon: LucideIcon;
}

export default function StatCard({ title, value, change, trend, icon: Icon }: StatCardProps) {
    return (
        <div className="glass-card rounded-xl p-6 transition-all hover:border-primary/20">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{title}</p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{value}</h3>
                </div>
                <div className="rounded-lg bg-secondary/50 p-2 text-primary">
                    <Icon size={20} />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <span
                    className={clsx(
                        "flex items-center text-xs font-medium",
                        trend === "up" ? "text-primary" : trend === "down" ? "text-destructive" : "text-muted-foreground"
                    )}
                >
                    {change}
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
        </div>
    );
}
