import { createDashboardService } from "./dashboard.service";
import { dashboardApi } from "../infrastructure/dashboard.api";

export const dashboardService = createDashboardService(dashboardApi);