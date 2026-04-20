import { createForecastService } from "./forecast.service";
import { forecastApi } from "../infrastructure/forecast.api";

export const forecastService = createForecastService(forecastApi);