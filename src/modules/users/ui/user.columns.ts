import { Column } from "../../../shared/types/colum.types";
import { User } from "../domain/user.model";
import { formatDate } from "../../../shared/utils/format";

export const userColumns: Column<User>[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "group", label: "Group" },
    { key: "manager", label: "Report to" },
    {
        key: "createdAt",
        label: "Created Date",
        render: (value) => formatDate(value as string),
    },
];