import { IForecastApi } from "./forecast-api.interface";

export const createForecastService = (api: IForecastApi) => ({

    async getForecast(): Promise<any> {
        const res = await api.getForecast();
        return res;
    },

});