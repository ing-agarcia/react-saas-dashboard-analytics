import { formatValue } from "../utils/format";

type Props = {
    title: string;
    value: number;
    format?: "currency" | "percentage" | "number" | "count";
};


export function KpiCard({ title, value, format = "number" }: Props) {

    return (
        <div className="card">
            <p className="text-sm text-secondary">{title}</p>
            <p className="text-xl font-bold">{formatValue(value, format)}</p>
        </div>
    );
}