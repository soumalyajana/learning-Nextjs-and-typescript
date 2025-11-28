import LeaderboardTable from "../components/LeaderboardTable";
import { Trophy, Award, TrendingUp } from "lucide-react";

export default function LeaderboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
                <p className="text-muted-foreground">Track member performance and celebrate achievements.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Top Performer</p>
                        <p className="text-2xl font-bold">Sarah Miller</p>
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                        <Award size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Most Badges</p>
                        <p className="text-2xl font-bold">Mike Johnson</p>
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Longest Streak</p>
                        <p className="text-2xl font-bold">45 Days</p>
                    </div>
                </div>
            </div>

            <LeaderboardTable />
        </div>
    );
}
