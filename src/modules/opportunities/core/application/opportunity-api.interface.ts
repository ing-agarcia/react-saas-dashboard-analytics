import { CreateOpportunityDTO } from "./dto/create-opportunity.dto";

export interface IOpportunityApi {
    newOpportunity(opportunity: CreateOpportunityDTO): Promise<any>;
}