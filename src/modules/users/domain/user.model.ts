// Representa el modelo del negocio.
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    roleId: number;
    group: string;
    groupId: number;
    manager: string;
    managerId: number;
    createdAt: string;
}