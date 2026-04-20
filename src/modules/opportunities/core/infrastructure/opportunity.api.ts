import api from "../../../../shared/api/api";
import { CreateOpportunityDTO } from "../application/dto/create-opportunity.dto";

export const opportunityApi = {
    async newOpportunity(opportunity: CreateOpportunityDTO) {
        const res = await api.post("/opportunities", opportunity);
        return res.data;
    }
};

