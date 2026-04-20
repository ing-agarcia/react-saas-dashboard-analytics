import { createOpportunitySummaryService } from "./opportunity.summary.service";
import { opportunitySummaryApi } from "../infrastructure/opportunity.summary.api";

export const opportunitySummaryService = createOpportunitySummaryService(opportunitySummaryApi);