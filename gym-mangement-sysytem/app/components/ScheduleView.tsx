"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, User } from "lucide-react";
import { clsx } from "clsx";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const classes = [
    { id: 1, name: "HIIT Blast", time: "07:00 AM", duration: "45 min", trainer: "Sarah", location: "Studio A", day: "Mon", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { id: 2, name: "Yoga Flow", time: "09:00 AM", duration: "60 min", trainer: "Emma", location: "Studio B", day: "Mon", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { id: 3, name: "Power Lift", time: "06:00 PM", duration: "60 min", trainer: "Mike", location: "Gym Floor", day: "Mon", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    { id: 4, name: "Spin Cycle", time: "08:00 AM", duration: "45 min", trainer: "John", location: "Cycle Room", day: "Tue", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { id: 5, name: "Zumba", time: "05:30 PM", duration: "60 min", trainer: "Lisa", location: "Studio A", day: "Tue", color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
    { id: 6, name: "CrossFit", time: "07:00 AM", duration: "60 min", trainer: "Alex", location: "Gym Floor", day: "Wed", color: "bg-green-500/10 text-green-500 border-green-500/20" },
];

export default function ScheduleView() {
    const [selectedDay, setSelectedDay] = useState("Mon");

    const filteredClasses = classes.filter((c) => c.day === selectedDay);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
                <button className="rounded-full p-2 hover:bg-secondary text-muted-foreground hover:text-foreground">
                    <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={clsx(
                                "rounded-lg px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                                selectedDay === day
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            {day}
                        </button>
                    ))}
                </div>
                <button className="rounded-full p-2 hover:bg-secondary text-muted-foreground hover:text-foreground">
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredClasses.map((cls) => (
                    <div key={cls.id} className={clsx("rounded-xl border p-5 transition-all hover:shadow-lg", cls.color)}>
                        <div className="mb-4 flex items-start justify-between">
                            <h3 className="text-lg font-semibold">{cls.name}</h3>
                            <span className="rounded-full bg-background/50 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                                {cls.duration}
                            </span>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{cls.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{cls.trainer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>{cls.location}</span>
                            </div>
                        </div>
                        <button className="mt-4 w-full rounded-lg bg-background/50 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-background/80">
                            View Details
                        </button>
                    </div>
                ))}
                {filteredClasses.length === 0 && (
                    <div className="col-span-full flex h-40 items-center justify-center rounded-xl border border-dashed border-border bg-secondary/20 text-muted-foreground">
                        No classes scheduled for this day.
                    </div>
                )}
            </div>
        </div>
    );
}
