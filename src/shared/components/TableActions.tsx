import { Pencil, Trash } from "lucide-react";

interface TableActionsProps {
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function TableActions({
    onEdit,
    onDelete
}:
    TableActionsProps) {
    if (!onEdit && !onDelete) return null;

    return (
        <div className="flex gap-2">
            {onEdit && (
                <button
                    onClick={onEdit}
                    type="button"
                    className="btn btn-sm btn-edit flex items-center gap-1"
                >
                    <Pencil size={14} />
                    Edit
                </button>
            )}

            {onDelete && (
                <button
                    onClick={onDelete}
                    type="button"
                    className="btn btn-sm btn-delete flex items-center gap-1"
                >
                    <Trash size={14} />
                    Delete
                </button>
            )}
        </div>
    );
}