"use client";

import { useState } from "react";
import { MoreHorizontal, Search, Filter } from "lucide-react";
import { clsx } from "clsx";

const initialMembers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", plan: "Premium", status: "Active", joinDate: "2023-10-15" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", plan: "Basic", status: "Inactive", joinDate: "2023-11-02" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", plan: "Pro", status: "Active", joinDate: "2023-09-20" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", plan: "Premium", status: "Active", joinDate: "2023-12-01" },
    { id: 5, name: "Evan Wright", email: "evan@example.com", plan: "Basic", status: "Active", joinDate: "2024-01-10" },
];

export default function MemberTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [members] = useState(initialMembers);

    const filteredMembers = members.filter(
        (member) =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search members..."
                        className="h-9 w-full rounded-md border border-border bg-secondary/50 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                    <Filter size={16} />
                    Filter
                </button>
            </div>

            <div className="rounded-xl border border-border bg-card overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-secondary/50 text-muted-foreground">
                        <tr>
                            <th className="px-6 py-3 font-medium">Name</th>
                            <th className="px-6 py-3 font-medium">Plan</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Join Date</th>
                            <th className="px-6 py-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {filteredMembers.map((member) => (
                            <tr key={member.id} className="group hover:bg-secondary/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-medium text-foreground">{member.name}</p>
                                        <p className="text-xs text-muted-foreground">{member.email}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                                        {member.plan}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={clsx(
                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                            member.status === "Active"
                                                ? "bg-green-500/10 text-green-500"
                                                : "bg-red-500/10 text-red-500"
                                        )}
                                    >
                                        {member.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">{member.joinDate}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
