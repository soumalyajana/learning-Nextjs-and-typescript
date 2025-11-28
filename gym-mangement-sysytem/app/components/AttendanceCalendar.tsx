"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { clsx } from "clsx";

export default function AttendanceCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Mock attendance data (dates in 'YYYY-MM-DD' format)
    const attendanceData = [
        "2025-11-01", "2025-11-03", "2025-11-04", "2025-11-06",
        "2025-11-08", "2025-11-10", "2025-11-11", "2025-11-13",
        "2025-11-15", "2025-11-17", "2025-11-18", "2025-11-20",
        "2025-11-22", "2025-11-24", "2025-11-25", "2025-11-27", "2025-11-28"
    ];

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const renderCalendarDays = () => {
        const totalDays = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);
        const calendarDays = [];

        // Empty cells for days before the 1st
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-10 w-10" />);
        }

        // Days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isAttended = attendanceData.includes(dateString);
            const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();

            calendarDays.push(
                <div key={day} className="flex flex-col items-center justify-center h-10 w-10 relative">
                    <div
                        className={clsx(
                            "h-8 w-8 flex items-center justify-center rounded-full text-sm font-medium transition-all",
                            isAttended ? "bg-emerald-500 text-white shadow-sm" : "text-foreground",
                            isToday && !isAttended ? "bg-primary/20 text-primary ring-1 ring-primary" : ""
                        )}
                    >
                        {day}
                    </div>
                    {isAttended && (
                        <div className="absolute -bottom-1">
                            <div className="h-1 w-1 rounded-full bg-emerald-600"></div>
                        </div>
                    )}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <div className="flex gap-1">
                    <button onClick={prevMonth} className="p-1 rounded-lg hover:bg-secondary text-muted-foreground">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextMonth} className="p-1 rounded-lg hover:bg-secondary text-muted-foreground">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                {days.map((day) => (
                    <div key={day} className="text-xs font-medium text-muted-foreground uppercase">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 place-items-center">
                {renderCalendarDays()}
            </div>

            <div className="mt-4 flex items-center justify-between text-sm border-t border-border pt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-muted-foreground">Workout Day</span>
                </div>
                <div className="font-medium">
                    <span className="text-emerald-500">{attendanceData.filter(d => d.startsWith(`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`)).length}</span>
                    <span className="text-muted-foreground"> sessions</span>
                </div>
            </div>
        </div>
    );
}
