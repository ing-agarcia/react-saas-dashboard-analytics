import { createOpportunityService } from "./opportunity.service";
import { opportunityApi } from "../infrastructure/opportunity.api";

export const opportunityService = createOpportunityService(opportunityApi); 