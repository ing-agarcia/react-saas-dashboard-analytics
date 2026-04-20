import { IProductApi } from "./product-api.interface";
import { Product } from "../domain/product.model";
import { PageResponse } from "../../../shared/types/pagination.types";


export const createProductService = (api: IProductApi) => ({

    async getProducts(page = 0, size = 50): Promise<PageResponse<Product>> {
        const res = await api.getProducts(page, size);
        return res;
    },

});
