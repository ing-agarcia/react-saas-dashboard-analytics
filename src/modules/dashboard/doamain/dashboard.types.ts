export interface DashboardData {
    kpis: Kpis;
    byStage: Stage[];
    trend: Trend[];
}

export interface Kpis {
    totalOpps: number;
    totalValue: number;
    weightedValue: number;
    winRate: number;
}

export interface Stage {
    stage: string;
    totalOpps: number;
    totalOppsPct: number;
    totalValue: number;
    totalValuePct: number;
}

export interface Trend {
    year: number;
    month: number;
    label: string;
    nameMonth: string;
    totalOpps: number;
    totalValue: number;
}