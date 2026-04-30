import api from "../../../../shared/api/api";

export const forecastApi = {

    async getForecast(model: string) {
        const res = await api.get("/forecast/trend", {
            params: {
                model,
            }
        });
        return res.data;
    },
}