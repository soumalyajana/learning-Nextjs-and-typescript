import { QrCode } from "lucide-react";

export default function CheckInPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center">
            <div>
                <h1 className="text-2xl font-bold mb-2">Member Check-In</h1>
                <p className="text-muted-foreground">Scan this code at the front desk.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-xl">
                <QrCode size={200} className="text-black" />
            </div>

            <div className="space-y-2">
                <p className="text-sm font-medium">Member ID</p>
                <p className="text-xl font-mono tracking-widest bg-secondary/50 px-4 py-2 rounded-lg">
                    MEM-8392-XJ
                </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-sm">
                <p className="font-medium">✅ Active Membership</p>
                <p className="opacity-80">Valid until Dec 31, 2025</p>
            </div>
        </div>
    );
}
