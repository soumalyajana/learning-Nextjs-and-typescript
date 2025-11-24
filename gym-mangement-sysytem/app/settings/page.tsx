"use client";

import { Bell, Lock, User, Globe } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                    <div className="rounded-xl border border-border bg-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                <User size={20} />
                            </div>
                            <h2 className="text-lg font-semibold">Profile Information</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                                <input type="text" defaultValue="Admin User" className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-muted-foreground">Email</label>
                                <input type="email" defaultValue="admin@fitpulse.com" className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                <Globe size={20} />
                            </div>
                            <h2 className="text-lg font-semibold">Appearance</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Dark Mode</p>
                                <p className="text-sm text-muted-foreground">Switch between light and dark themes.</p>
                            </div>
                            <div className="h-6 w-11 rounded-full bg-primary p-1 cursor-pointer">
                                <div className="h-4 w-4 rounded-full bg-white shadow-sm translate-x-5 transition-transform"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-xl border border-border bg-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                <Bell size={20} />
                            </div>
                            <h2 className="text-lg font-semibold">Notifications</h2>
                        </div>
                        <div className="space-y-4">
                            {["Email Notifications", "Push Notifications", "Weekly Reports"].map((item) => (
                                <div key={item} className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{item}</span>
                                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border bg-secondary text-primary focus:ring-primary" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                <Lock size={20} />
                            </div>
                            <h2 className="text-lg font-semibold">Security</h2>
                        </div>
                        <button className="w-full rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
