import { useState, useEffect } from "react";
import { productService } from "../application/product.service.instance";
import { useToast } from "../../../shared/context/ToastContext";
import DataTable from "../../../shared/components/DataTable";
import { productColumns } from "./product.colums";
import { Product } from "../domain/product.model";
import { PageResponse } from "../../../shared/types/pagination.types";

export default function ProductsPage() {
    const { showToast } = useToast();
    const [tableProducts, setTableProducts] = useState<PageResponse<Product> | null>(null);

    // Form loading state
    const [loading, setLoading] = useState(false);

    const fetchProducts = async (page = 0) => {
        try {
            const response = await productService.getProducts(page, 50);
            setTableProducts(response);
        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Error fetching  products");
        }
    };

    const handlePageChange = (newPage: number) => {
        fetchProducts(newPage);
    };

    useEffect(() => {
        fetchProducts(0);
    }, []);


    return (
        <div className="w-full pt-3 px-3">
            <DataTable<Product>
                tableData={tableProducts}
                columns={productColumns}
                onEdit={undefined}
                onDelete={undefined}
                onPageChange={handlePageChange}
            />
        </div>
    );
}