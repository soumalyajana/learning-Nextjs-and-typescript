"use client";

import { useState } from "react";
import MemberTable from "../components/MemberTable";
import AddMemberModal from "../components/AddMemberModal";
import { Plus } from "lucide-react";

export default function MembersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Members</h1>
                    <p className="text-muted-foreground">Manage your gym members and their subscriptions.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                    <Plus size={16} />
                    Add Member
                </button>
            </div>

            <MemberTable />

            <AddMemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
