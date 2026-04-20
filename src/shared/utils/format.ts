export type FormatType = "currency" | "percentage" | "number" | "count";

export function formatValue(value: number, format: FormatType = "number") {
    switch (format) {
        case "currency":
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                notation: "compact",
                maximumFractionDigits: 1
            }).format(value);

        case "percentage":
            if (typeof value !== "number") return "0.0%";
            return `${value.toFixed(1)}%`;

        case "count":
            return new Intl.NumberFormat("en-US").format(value); // 👈 sin compact

        default:
            return new Intl.NumberFormat("en-US", {
                notation: "compact"
            }).format(value);
    }
}

export function formatDate(value: string | Date) {
    return new Date(value).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    });
}