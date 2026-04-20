// Define el contrato de paginación (compartido)
export interface PageResponse<T> {
    data: T[];
    page: number;
    pageSize: number;
    total: number;
}