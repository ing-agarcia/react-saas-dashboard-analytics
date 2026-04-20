import { IOpportunitySummaryApi } from "./opportunity.summary-api.interface";
import { OpportunitySummary } from "../domain/opportunity.summary.model";
import { PageResponse } from "../../../../shared/types/pagination.types";

export const createOpportunitySummaryService = (api: IOpportunitySummaryApi) => ({

    async getOpportunitiesByUserHierarchy(page = 0, size = 50): Promise<PageResponse<OpportunitySummary>> {
        const res = await api.getOpportunitiesByUserHierarchy(page, size);
        return res;
    },

});
