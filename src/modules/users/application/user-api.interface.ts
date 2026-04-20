import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

export interface IUserApi {
    getUsers(page?: number, size?: number): Promise<any>;
    newUser(data: CreateUserDTO): Promise<any>;
    updateUser(data: UpdateUserDTO): Promise<any>;
    deleteUser(id: number): Promise<any>;
    getManagers(roleId: number): Promise<any>;
    getReport(page?: number, size?: number): Promise<Blob>;
}