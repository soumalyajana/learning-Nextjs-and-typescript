"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, QrCode, User, Dumbbell } from "lucide-react";
import { clsx } from "clsx";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navigation = [
        { name: "Home", href: "/portal", icon: Home },
        { name: "Schedule", href: "/portal/schedule", icon: Calendar },
        { name: "Check In", href: "/portal/check-in", icon: QrCode },
        { name: "Workouts", href: "/portal/workouts", icon: Dumbbell },
        { name: "Profile", href: "/portal/profile", icon: User },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Mobile Header */}
            <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md px-4 py-3 flex items-center justify-between lg:hidden">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Dumbbell size={20} />
                    </div>
                    <span className="font-bold tracking-tight">FitPulse Member</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                    <User size={16} />
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 lg:p-8 max-w-md mx-auto lg:max-w-4xl">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-background/80 backdrop-blur-md pb-safe">
                <div className="flex justify-around items-center h-16 max-w-md mx-auto">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    "flex flex-col items-center justify-center w-full h-full gap-1 text-[10px] font-medium transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <item.icon size={24} className={isActive ? "fill-primary/20" : ""} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
