import { formatValue } from "../utils/format";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";

type Trend = {
    month: number;
    nameMonth: string;
    lastYear: number;
    currentYear: number;
};

type Props = {
    data: Trend[];
};

export function TrendLineChart({ data }: Props) {
    return (
        <div className="card">
            <h2 className="text-lg mb-4">Pipeline Trend</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="nameMonth"
                        stroke="var(--text-secondary)"
                    />
                    <YAxis
                        width="auto"
                        stroke="var(--text-secondary)"
                        tickFormatter={(value: number) =>
                            formatValue(Number(value), "currency")
                        }
                    />

                    <Tooltip
                        contentStyle={{
                            background: 'var(--bg-2)',
                            border: '1px solid var(--border-panel)',
                            color: 'var(--text-primary)'
                        }}
                        formatter={(value) =>
                            value == null ? "" : formatValue(Number(value), "currency")
                        }
                    />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="currentYear"
                        name="Current Year"
                        stroke="var(--accent-strong)"
                        strokeWidth={2.5}
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                    />

                    <Line
                        type="monotone"
                        dataKey="lastYear"
                        name="Last Year"
                        stroke="var(--text-secondary)"
                        strokeDasharray="5 5"
                        strokeWidth={2}
                        dot={{ r: 3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}