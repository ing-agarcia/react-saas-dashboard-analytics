export interface IForecastApi {
    getForecast(model: string): Promise<any>;
}