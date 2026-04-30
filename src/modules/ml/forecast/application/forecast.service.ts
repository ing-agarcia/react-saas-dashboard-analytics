import { IForecastApi } from "./forecast-api.interface";

export const createForecastService = (api: IForecastApi) => ({

    async getForecast(model: string): Promise<any> {
        const res = await api.getForecast(model);
        return res;
    },

});