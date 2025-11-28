"use client";

import { useState } from "react";
import { Info, AlertCircle, CheckCircle2, Wrench } from "lucide-react";
import { clsx } from "clsx";

type MachineStatus = "available" | "in-use" | "maintenance";

interface Machine {
    id: string;
    name: string;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    status: MachineStatus;
    user?: string;
    startTime?: string;
}

export default function FloorPlanMap() {
    const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
    const [machines, setMachines] = useState<Machine[]>([
        // Cardio Section
        { id: "t1", name: "Treadmill 1", type: "Cardio", x: 50, y: 50, width: 40, height: 80, status: "in-use", user: "Sarah M.", startTime: "10:15 AM" },
        { id: "t2", name: "Treadmill 2", type: "Cardio", x: 100, y: 50, width: 40, height: 80, status: "available" },
        { id: "t3", name: "Treadmill 3", type: "Cardio", x: 150, y: 50, width: 40, height: 80, status: "maintenance" },
        { id: "e1", name: "Elliptical 1", type: "Cardio", x: 220, y: 50, width: 40, height: 80, status: "available" },
        { id: "e2", name: "Elliptical 2", type: "Cardio", x: 270, y: 50, width: 40, height: 80, status: "in-use", user: "John D.", startTime: "10:30 AM" },

        // Strength Section
        { id: "bp1", name: "Bench Press", type: "Strength", x: 50, y: 200, width: 60, height: 60, status: "available" },
        { id: "sq1", name: "Squat Rack", type: "Strength", x: 150, y: 200, width: 60, height: 60, status: "in-use", user: "Mike T.", startTime: "10:00 AM" },
        { id: "lp1", name: "Leg Press", type: "Strength", x: 250, y: 200, width: 60, height: 80, status: "available" },

        // Free Weights
        { id: "db1", name: "Dumbbell Rack", type: "Free Weights", x: 350, y: 50, width: 200, height: 40, status: "available" },
        { id: "db2", name: "Bench 1", type: "Free Weights", x: 360, y: 120, width: 40, height: 80, status: "in-use", user: "Alex R.", startTime: "10:45 AM" },
        { id: "db3", name: "Bench 2", type: "Free Weights", x: 420, y: 120, width: 40, height: 80, status: "available" },
        { id: "db4", name: "Bench 3", type: "Free Weights", x: 480, y: 120, width: 40, height: 80, status: "available" },

        // Functional Area
        { id: "m1", name: "Mat Area", type: "Functional", x: 350, y: 250, width: 200, height: 100, status: "available" },
    ]);

    const getStatusColor = (status: MachineStatus) => {
        switch (status) {
            case "available": return "fill-emerald-500/20 stroke-emerald-500 text-emerald-500";
            case "in-use": return "fill-red-500/20 stroke-red-500 text-red-500";
            case "maintenance": return "fill-amber-500/20 stroke-amber-500 text-amber-500";
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
            {/* Map Container */}
            <div className="flex-1 relative rounded-xl border border-border bg-card overflow-hidden">
                <div className="absolute bottom-4 left-4 z-10 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border shadow-sm">
                    <h3 className="font-semibold mb-2">Legend</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span>In Use</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <span>Maintenance</span>
                        </div>
                    </div>
                </div>

                <svg className="w-full h-full" viewBox="0 0 600 400">
                    {/* Floor Background */}
                    <rect x="0" y="0" width="600" height="400" className="fill-secondary/30" />

                    {/* Grid Lines */}
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Zones Labels */}
                    <text x="30" y="30" className="fill-muted-foreground/50 text-sm font-bold uppercase tracking-widest">Cardio Zone</text>
                    <text x="30" y="180" className="fill-muted-foreground/50 text-sm font-bold uppercase tracking-widest">Strength Zone</text>
                    <text x="350" y="30" className="fill-muted-foreground/50 text-sm font-bold uppercase tracking-widest">Free Weights</text>

                    {/* Machines */}
                    {machines.map((machine) => (
                        <g
                            key={machine.id}
                            onClick={() => setSelectedMachine(machine)}
                            className="cursor-pointer transition-all hover:opacity-80"
                        >
                            <rect
                                x={machine.x}
                                y={machine.y}
                                width={machine.width}
                                height={machine.height}
                                rx="4"
                                className={clsx("stroke-2 transition-colors", getStatusColor(machine.status))}
                            />
                            {/* Icon based on type (simplified) */}
                            <text
                                x={machine.x + machine.width / 2}
                                y={machine.y + machine.height / 2}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="fill-foreground text-[10px] font-medium pointer-events-none"
                            >
                                {machine.id.toUpperCase()}
                            </text>
                        </g>
                    ))}
                </svg>
            </div>

            {/* Details Panel */}
            <div className="w-full lg:w-80 rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-bold mb-6">Machine Details</h2>

                {selectedMachine ? (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold">{selectedMachine.name}</h3>
                                <span className={clsx("px-2 py-1 rounded-full text-xs font-medium capitalize border",
                                    selectedMachine.status === "available" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                                        selectedMachine.status === "in-use" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                            "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                )}>
                                    {selectedMachine.status}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{selectedMachine.type}</p>
                        </div>

                        <div className="space-y-4">
                            {selectedMachine.status === "in-use" && (
                                <div className="p-4 rounded-lg bg-secondary/50 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                            {selectedMachine.user?.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{selectedMachine.user}</p>
                                            <p className="text-xs text-muted-foreground">Started at {selectedMachine.startTime}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedMachine.status === "maintenance" && (
                                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 space-y-2">
                                    <div className="flex items-center gap-2 font-medium">
                                        <Wrench size={16} />
                                        Maintenance Required
                                    </div>
                                    <p className="text-xs opacity-90">Scheduled for repair on Nov 30th.</p>
                                </div>
                            )}

                            <div className="pt-4 border-t border-border">
                                <h4 className="text-sm font-medium mb-3">Quick Actions</h4>
                                <div className="space-y-2">
                                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors text-left">
                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                        Mark as Available
                                    </button>
                                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors text-left">
                                        <AlertCircle size={16} className="text-red-500" />
                                        Report Issue
                                    </button>
                                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors text-left">
                                        <Info size={16} className="text-blue-500" />
                                        View Usage History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-4">
                        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                            <Info size={32} />
                        </div>
                        <p>Select a machine on the map to view details and manage status.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
