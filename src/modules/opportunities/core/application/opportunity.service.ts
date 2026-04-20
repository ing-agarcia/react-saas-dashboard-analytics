import { IOpportunityApi } from "./opportunity-api.interface";
import { Opportunity } from "../domain/opportunity.model";
import { PageResponse } from "../../../../shared/types/pagination.types";
import { CreateOpportunityDTO } from "../application/dto/create-opportunity.dto"

export const createOpportunityService = (api: IOpportunityApi) => ({

    async createOpportunity(opportunity: CreateOpportunityDTO): Promise<Opportunity> {
        const res = await api.newOpportunity(opportunity);
        return res;

    }

});
