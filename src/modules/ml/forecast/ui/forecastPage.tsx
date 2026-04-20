import { useState, useEffect } from "react";
import { forecastService } from "../application/forecast.service.instance";
import { useToast } from "../../../../shared/context/ToastContext";
import { ForecastChart } from "../../../../shared/components/ForecastChart";

export default function ForecastPage() {
    const { showToast } = useToast();
    const [forecastData, setForecastData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchForecastData = async () => {
        try {
            setLoading(true);
            const data = await forecastService.getForecast();
            setForecastData(data);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching forecast data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchForecastData();
    }, []);

    return (
        <div className="w-full pt-3 px-3">
            <h1 className="text-2xl font-bold mb-4">Forecast</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ForecastChart data={forecastData} />
            )}
        </div>
    );
}
