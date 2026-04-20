import { formatValue } from "../utils/format";
import { CartesianGrid } from "recharts";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

type Stage = {
    stage: string;
    totalOpps: number;
    totalOppsPct: number;
    totalValue: number;
    totalValuePct: number;
};

type Props = {
    data: Stage[];
    format?: "currency" | "percentage" | "number";
};

export function StageBarChart({ data }: Props) {

    const order = ["Prospecting", "Open", "Forecast", "Upside", "Won", "Lost"];

    const sortedData = [...data].sort(
        (a, b) => order.indexOf(a.stage) - order.indexOf(b.stage)
    );

    return (
        <div className="card">
            <h2 className="text-lg mb-4">Pipeline by Stage</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sortedData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="stage"
                        stroke="var(--text-secondary)" />
                    <YAxis
                        width="auto"
                        stroke="var(--text-secondary)"
                        tickFormatter={(value: number) =>
                            formatValue(Number(value), "currency")
                        }

                    />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{
                            background: 'var(--bg-2)',
                            border: '1px solid var(--border-panel)',
                            color: 'var(--text-primary)'
                        }}
                        formatter={(value) =>
                            value == null ? "" : formatValue(Number(value), "currency")
                        }
                    />
                    <Bar dataKey="totalValue" name="Revenue" fill="var(--accent-strong)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}