import TableActions from "./TableActions";
import { PageResponse } from "../types/pagination.types";
import { Column } from "../types/colum.types";
import { getAlignClass } from "../utils/dataTable.utils";
import { useAuth } from "../../modules/auth/context/AuthContext";

interface DataTableProps<T> {
    tableData: PageResponse<T> | null;
    columns: Column<T>[];
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    onPageChange: (page: number) => void;
}

function DataTable<T>({
    tableData,
    columns,
    onEdit,
    onDelete,
    onPageChange
}: DataTableProps<T>) {
    if (!tableData) return <p>Cargando datos...</p>;

    const { data, page, pageSize, total } = tableData;
    const totalPages = Math.ceil(total / pageSize);

    const hasActions = Boolean(onEdit || onDelete);

    const { user } = useAuth();
    const isRoot = user?.role === "Root" || user?.role === "ROOT";

    return (
        <>
            <table className="w-full text-sm border border-[--border-panel] rounded-lg overflow-hidden">

                {/* HEADER */}
                <thead>
                    <tr className="bg-[--bg-panel] text-[--text-secondary]">
                        {columns.map((h) => (
                            <th key={String(h.key)}
                                className="px-4 py-2 border-b border-[--border-panel] text-left">
                                {h.label}
                            </th>
                        ))}
                        {hasActions && isRoot && (
                            <th className="px-4 py-2 border-b border-[--border-panel] text-left">
                                Acciones
                            </th>
                        )}
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="hover:bg-[--bg-btn-hover] transition">
                            {columns.map((col) => (
                                <td
                                    key={String(col.key)}
                                    className={`px-4 py-2 border-b border-[--border-panel] ${getAlignClass(col.align)}`}
                                >
                                    {col.render
                                        ? col.render(row[col.key], row)
                                        : String(row[col.key] ?? "-")}
                                </td>
                            ))}

                            {hasActions && isRoot && (
                                <td className="px-4 py-2 border-b border-[--border-panel]">
                                    <TableActions
                                        onEdit={onEdit ? () => onEdit(row) : undefined}
                                        onDelete={onDelete ? () => onDelete(row) : undefined}
                                    />
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* PAGINATION */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4 text-sm text-[--text-secondary]">
                    <span>
                        Página {page + 1} de {totalPages}
                    </span>

                    <div className="flex gap-2">
                        <button
                            className="btn btn-secondary"
                            disabled={page === 0}
                            onClick={() => onPageChange(page - 1)}
                        >
                            Anterior
                        </button>

                        <button
                            className="btn btn-secondary"
                            disabled={page + 1 >= totalPages}
                            onClick={() => onPageChange(page + 1)}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default DataTable;