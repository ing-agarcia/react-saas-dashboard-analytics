import { Column } from "../../../../shared/types/colum.types";
import { OpportunitySummary } from "../domain/opportunity.summary.model";
import { formatValue } from "../../../../shared/utils/format";
import { formatDate } from "../../../../shared/utils/format";

export const opportunitySummaryColumns: Column<OpportunitySummary>[] = [
    { key: "id", label: "Opportunity", align: "right" },

    { key: "name", label: "Opportunity Name" },

    { key: "stage", label: "Stage" },

    {
        key: "probability",
        label: "Probability",
        align: "right",
        render: (value) => formatValue(value as number, "percentage"),
    },

    {
        key: "amount",
        label: "Amount",
        align: "right",
        render: (value) => formatValue(value as number, "currency"),
    },

    {
        key: "createdAt",
        label: "Created Date",
        align: "center",
        render: (value) => formatDate(value as string),
    },

    { key: "salesName", label: "Sales Rep" },
    { key: "managerName", label: "Manager" },
    { key: "directorName", label: "Director" },
    { key: "vpName", label: "VP" },
    { key: "rootName", label: "Root" },
];
