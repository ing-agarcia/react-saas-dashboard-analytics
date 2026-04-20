// DTO = Data Transfer Object
// Representa lo que envías al backend.
export interface UpdateUserDTO {
    id: number;
    name?: string;
    email?: string;
    roleId?: number;
    groupId?: number;
    managerId?: number;
}