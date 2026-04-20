import api from "../../../../shared/api/api";

export const forecastApi = {
    async getForecast() {
        const res = await api.get("/forecast/trend");
        return res.data;
    },
}