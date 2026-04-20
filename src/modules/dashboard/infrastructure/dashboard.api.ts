import api from "../../../shared/api/api";

export const dashboardApi = {
    async getDashboard() {
        const res = await api.get("/dashboard");
        return res.data;
    },

}