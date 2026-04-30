import { useState, useEffect } from "react";
import { forecastService } from "../application/forecast.service.instance";
import { useToast } from "../../../../shared/context/ToastContext";
import { ForecastChart } from "../../../../shared/components/ForecastChart";

export default function ForecastPage() {
    const { showToast } = useToast();
    const [forecastData, setForecastData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    type ModelType = 'linear' | 'ridge' | 'lasso';
    const [selectedModel, setSelectedModel] = useState<ModelType>('linear');

    const models: { label: string; value: typeof selectedModel }[] = [
        { value: "linear", label: "Linear Regression" },
        { value: "ridge", label: "Ridge Regression" },
        { value: "lasso", label: "Lasso Regression" }
    ];

    const fetchForecastData = async (model: ModelType) => {
        try {
            setLoading(true);
            const data = await forecastService.getForecast(model);
            setForecastData(data);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching forecast data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchForecastData(selectedModel);
    }, [selectedModel]);

    const handleChangeModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(e.target.value as ModelType);
    };


    return (
        <div className="w-full pt-3 px-3">
            <h1 className="text-2xl font-bold mb-4">Forecast</h1>

            <div>
                <h2 className="text-lg mb-2">Select Forecast Model</h2>

                <select
                    className="select w-full border rounded-lg px-3 py-2"
                    value={selectedModel}
                    onChange={handleChangeModel}
                    disabled={!models.length}
                    required
                >
                    {models.map((model) => (
                        <option key={model.value} value={model.value}>
                            {model.label}
                        </option>
                    ))}
                </select>
            </div>


            {loading ? (
                <p>Loading {selectedModel} forecast...</p>
            ) : !forecastData ? (
                <p className="text-sm text-red-500 mt-2">
                    Unable to load forecast data
                </p>
            ) : (
                <div className="mt-5">
                    <ForecastChart data={forecastData} />
                </div>
            )}
        </div>
    );
}
