import api from "../../../../shared/api/api";

export const opportunitySummaryApi = {
    async getOpportunitiesByUserHierarchy(page = 0, size = 50) {
        const res = await api.get("/opportunities/summary", {
            params: {
                page,
                size
            }
        });
        return res.data;
    },

};