import { Column } from "../../../shared/types/colum.types";
import { formatValue } from "../../../shared/utils/format";
import { Product } from "../domain/product.model";

export const productColumns: Column<Product>[] = [
    { key: "id", label: "Id Product" },
    { key: "name", label: "Product" },
    { key: "category", label: "Category" },
    {
        key: "price",
        label: "Price",
        align: "right",
        render: (value) => formatValue(value as number, "currency"),
    },

];