import { ForecastData } from "../../modules/ml/forecast/domain/forecast.types";

type Props = {
    data: ForecastData[];
};

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";
import { formatValue } from "../utils/format";

export const ForecastChart = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="nameMonth"
                    stroke="var(--text-secondary)" />
                <YAxis width="auto"
                    stroke="var(--text-secondary)"
                    tickFormatter={(value: number) =>
                        formatValue(Number(value), "currency")
                    } />

                <Tooltip
                    cursor={{ stroke: "transparent" }}
                    contentStyle={{
                        background: 'var(--bg-2)',
                        border: '1px solid var(--border-panel)',
                        color: 'var(--text-primary)'
                    }}
                    formatter={(value) =>
                        value == null ? "" : formatValue(Number(value), "currency")
                    } />

                <Line
                    type="monotone"
                    dataKey="currentYear"
                    stroke="var(--accent-strong)"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                    connectNulls
                />

                <Line
                    type="monotone"
                    dataKey="forecast"
                    name="Forecast Prediction"
                    stroke="var(--success)"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    animationBegin={1000}
                    animationDuration={1000}
                    connectNulls
                />
            </LineChart>
        </ResponsiveContainer>
    );
};