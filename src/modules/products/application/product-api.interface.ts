export interface IProductApi {
    getProducts(page?: number, size?: number): Promise<any>;
}