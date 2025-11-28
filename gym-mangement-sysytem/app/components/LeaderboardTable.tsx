"use client";

import { Trophy, Medal, Flame, TrendingUp, Award } from "lucide-react";
import { clsx } from "clsx";

interface Member {
    id: string;
    rank: number;
    name: string;
    points: number;
    streak: number;
    workouts: number;
    badges: string[];
    avatarColor: string;
}

const members: Member[] = [
    { id: "1", rank: 1, name: "Sarah Miller", points: 12500, streak: 45, workouts: 156, badges: ["🔥", "💪", "🏆"], avatarColor: "bg-purple-500" },
    { id: "2", rank: 2, name: "Mike Johnson", points: 11200, streak: 32, workouts: 142, badges: ["🏋️", "⚡"], avatarColor: "bg-blue-500" },
    { id: "3", rank: 3, name: "Emma Davis", points: 10800, streak: 28, workouts: 138, badges: ["🧘‍♀️", "✨"], avatarColor: "bg-emerald-500" },
    { id: "4", rank: 4, name: "Alex Wilson", points: 9500, streak: 15, workouts: 98, badges: ["🏃‍♂️"], avatarColor: "bg-orange-500" },
    { id: "5", rank: 5, name: "Chris Brown", points: 8900, streak: 12, workouts: 85, badges: ["🥊"], avatarColor: "bg-red-500" },
    { id: "6", rank: 6, name: "Lisa Taylor", points: 8200, streak: 8, workouts: 76, badges: ["💃"], avatarColor: "bg-pink-500" },
    { id: "7", rank: 7, name: "David Clark", points: 7500, streak: 5, workouts: 62, badges: ["🚴‍♂️"], avatarColor: "bg-cyan-500" },
    { id: "8", rank: 8, name: "Sophia White", points: 6800, streak: 3, workouts: 45, badges: [], avatarColor: "bg-indigo-500" },
];

export default function LeaderboardTable() {
    return (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border bg-secondary/20">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Trophy className="text-yellow-500" />
                            Top Performers
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Rankings based on workout consistency and points.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background shadow-sm text-foreground">
                            This Week
                        </button>
                        <button className="px-3 py-1.5 text-sm font-medium rounded-lg text-muted-foreground hover:bg-background/50">
                            All Time
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-secondary/50 text-muted-foreground font-medium">
                        <tr>
                            <th className="px-6 py-4 w-20 text-center">Rank</th>
                            <th className="px-6 py-4">Member</th>
                            <th className="px-6 py-4 text-right">Points</th>
                            <th className="px-6 py-4 text-center">Streak</th>
                            <th className="px-6 py-4 text-center">Badges</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {members.map((member) => (
                            <tr key={member.id} className="group hover:bg-secondary/30 transition-colors">
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center">
                                        {member.rank === 1 ? (
                                            <div className="w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20">
                                                <Trophy size={16} />
                                            </div>
                                        ) : member.rank === 2 ? (
                                            <div className="w-8 h-8 rounded-full bg-gray-400/10 text-gray-400 flex items-center justify-center border border-gray-400/20">
                                                <Medal size={16} />
                                            </div>
                                        ) : member.rank === 3 ? (
                                            <div className="w-8 h-8 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center border border-amber-700/20">
                                                <Medal size={16} />
                                            </div>
                                        ) : (
                                            <span className="font-medium text-muted-foreground">#{member.rank}</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-sm", member.avatarColor)}>
                                            {member.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{member.name}</div>
                                            <div className="text-xs text-muted-foreground">{member.workouts} workouts completed</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="font-bold text-primary">{member.points.toLocaleString()}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-1 text-orange-500 font-medium">
                                        <Flame size={16} className={member.streak > 10 ? "fill-orange-500" : ""} />
                                        {member.streak}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-1">
                                        {member.badges.map((badge, i) => (
                                            <span key={i} className="text-lg" title="Badge">{badge}</span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
