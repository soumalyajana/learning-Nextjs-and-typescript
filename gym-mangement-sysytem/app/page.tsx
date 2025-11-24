import StatCard from "./components/StatCard";
import ActivityChart from "./components/ActivityChart";
import { Users, DollarSign, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to FitPulse Admin.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Members"
          value="1,248"
          change="+12%"
          trend="up"
          icon={Users}
        />
        <StatCard
          title="Active Now"
          value="42"
          change="+4%"
          trend="up"
          icon={Activity}
        />
        <StatCard
          title="Total Revenue"
          value="$48,200"
          change="+2.5%"
          trend="up"
          icon={DollarSign}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Weekly Activity</h3>
          <ActivityChart />
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Recent Signups</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
                    M{i}
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Member {i}</p>
                    <p className="text-xs text-muted-foreground">Joined 2h ago</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-primary">+$99</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
