import { createProductService } from "./product.service";
import { productApi } from "../infrastructure/product.api";

export const productService = createProductService(productApi);