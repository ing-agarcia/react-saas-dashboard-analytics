import { IDashboardApi } from "./dashboard-api.interface";

export const createDashboardService = (api: IDashboardApi) => ({

    async getDashboard(): Promise<any> {
        const res = await api.getDashboard();
        return res;
    },

});