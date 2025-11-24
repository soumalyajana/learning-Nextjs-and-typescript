"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Mon", visits: 40, revenue: 2400 },
    { name: "Tue", visits: 30, revenue: 1398 },
    { name: "Wed", visits: 20, revenue: 9800 },
    { name: "Thu", visits: 27, revenue: 3908 },
    { name: "Fri", visits: 18, revenue: 4800 },
    { name: "Sat", visits: 23, revenue: 3800 },
    { name: "Sun", visits: 34, revenue: 4300 },
];

export default function ActivityChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#bef264" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#bef264" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis
                        dataKey="name"
                        stroke="#a1a1aa"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#a1a1aa"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#18181b",
                            border: "1px solid #27272a",
                            borderRadius: "8px",
                        }}
                        itemStyle={{ color: "#fafafa" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="visits"
                        stroke="#bef264"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorVisits)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
