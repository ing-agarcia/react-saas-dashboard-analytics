export interface IOpportunitySummaryApi {
    getOpportunitiesByUserHierarchy(page?: number, size?: number): Promise<any>;
}