import { useState, useEffect } from "react";
import { dashboardService } from "../application/dashboard.service.instance";
import { useToast } from "../../../shared/context/ToastContext";
import { KpiCard } from "../../../shared/components/KpiCard";
import { StageBarChart } from "../../../shared/components/StageBarChart";
import { TrendLineChart } from "../../../shared/components/TrendLineChart";
import DataTable from "../../../shared/components/DataTable";

import { opportunitySummaryColumns } from "../../opportunities/summary/ui/opportunity.summary.colums";
import { OpportunitySummary } from "../../opportunities/summary/domain/opportunity.summary.model";
import { opportunitySummaryService } from "../../opportunities/summary/application/opportunity.summary.service.instance";
import { PageResponse } from "../../../shared/types/pagination.types";

export default function DashboardPage() {
    const { showToast } = useToast();
    const [dashboardData, setDashboardData] = useState<any>(null);
    const [tableOpportunities, setTableOpportunities] = useState<PageResponse<OpportunitySummary> | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const data = await dashboardService.getDashboard();
            setDashboardData(data);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching dashboard data");
        } finally {
            setLoading(false);
        }
    };

    const fetchOpportunities = async (page = 0) => {
        try {
            const response = await opportunitySummaryService.getOpportunitiesByUserHierarchy(page, 50);
            setTableOpportunities(response);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching Opportunities");
        }
    };

    useEffect(() => {
        fetchDashboardData();
        fetchOpportunities(0);
    }, []);

    const handlePageChange = (newPage: number) => {
        fetchOpportunities(newPage);
    };

    const kpis = dashboardData?.kpis || [];
    const stages = dashboardData?.byStage || [];
    const trends = dashboardData?.trend || [];

    return (
        <div className="w-full pt-3 px-3" >
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <>
                    <KpiCard title="Total Opportunities" value={kpis.totalOpps} format="count" />
                    <KpiCard title="Total Revenue" value={kpis.totalValue} format="currency" />
                    <KpiCard title="Weighted Revenue" value={kpis.weightedValue} format="currency" />
                    <KpiCard title="Win Rate" value={kpis.winRate} format="percentage" />
                </>
            </div>

            {/* Trends */}
            <div className="mt-6 bg-(--bg-2) p-4 rounded-xl">
                <StageBarChart data={stages} />
            </div>

            {/* Stages */}
            <div className="mt-6 bg-(--bg-2) p-4 rounded-xl">
                <TrendLineChart data={trends} />
            </div>

            {/* Table */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-300">
                    Opportunities
                </h2>
                <DataTable<OpportunitySummary>
                    tableData={tableOpportunities}
                    columns={opportunitySummaryColumns}
                    onEdit={undefined}
                    onDelete={undefined}
                    onPageChange={handlePageChange}
                />
            </div>


        </div>
    );

}
