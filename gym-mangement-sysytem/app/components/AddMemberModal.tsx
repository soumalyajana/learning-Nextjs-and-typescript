"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddMemberModal({ isOpen, onClose }: AddMemberModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Add New Member</h2>
                    <button onClick={onClose} className="rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-foreground">
                        <X size={20} />
                    </button>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-muted-foreground">Full Name</label>
                        <input
                            type="text"
                            className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-muted-foreground">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-muted-foreground">Plan</label>
                            <select className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                <option>Basic</option>
                                <option>Pro</option>
                                <option>Premium</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-muted-foreground">Status</label>
                            <select className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                            Add Member
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
