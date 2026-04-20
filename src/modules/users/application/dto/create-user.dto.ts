// DTO = Data Transfer Object, Representa lo que se envia al backend.
export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
    roleId: number | null;
    groupId: number | null;
    managerId: number | null;
}