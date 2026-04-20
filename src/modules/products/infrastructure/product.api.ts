import api from "../../../shared/api/api";

export const productApi = {
    async getProducts(page = 0, size = 50) {
        const res = await api.get("/products", {
            params: {
                page,
                size
            }
        });
        return res.data;
    },

};