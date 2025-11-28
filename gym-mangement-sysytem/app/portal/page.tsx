import Link from "next/link";
import { QrCode, Calendar, TrendingUp, ChevronRight, Activity } from "lucide-react";
import AttendanceCalendar from "../components/AttendanceCalendar";

export default function PortalPage() {
    return (
        <div className="space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Hello, Sarah! 👋</h1>
                    <p className="text-muted-foreground">Ready to crush it today?</p>
                </div>
                <Link href="/portal/check-in" className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20">
                    <QrCode size={24} />
                </Link>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Activity size={16} />
                        <span className="text-xs font-medium uppercase">Workouts</span>
                    </div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-emerald-500 font-medium">This Month</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <TrendingUp size={16} />
                        <span className="text-xs font-medium uppercase">Streak</span>
                    </div>
                    <p className="text-2xl font-bold">5 Days</p>
                    <p className="text-xs text-orange-500 font-medium">Keep it up!</p>
                </div>
            </div>

            {/* Next Class */}
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Up Next</h2>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">Today</span>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 flex flex-col items-center justify-center rounded-lg bg-card border border-border py-2">
                        <span className="text-xs font-bold text-muted-foreground">NOV</span>
                        <span className="text-lg font-bold">28</span>
                    </div>
                    <div>
                        <h3 className="font-bold">HIIT Blast</h3>
                        <p className="text-sm text-muted-foreground">05:30 PM • Studio A</p>
                        <p className="text-xs text-muted-foreground mt-1">with Coach Mike</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
                <h2 className="font-semibold">Quick Actions</h2>
                <Link href="/ai-coach" className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                            <Activity size={20} />
                        </div>
                        <span className="font-medium">Generate Workout</span>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground" />
                </Link>
                <Link href="/portal/schedule" className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                            <Calendar size={20} />
                        </div>
                        <span className="font-medium">Book a Class</span>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground" />
                </Link>
            </div>

            {/* Attendance Calendar */}
            <div>
                <h2 className="font-semibold mb-3">Attendance History</h2>
                <AttendanceCalendar />
            </div>
        </div>
    );
}
