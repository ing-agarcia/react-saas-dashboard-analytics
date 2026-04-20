import { User } from "../domain/user.model";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { HierarchyUserDTO } from "./dto/hierarchy-user.dto";
import { IUserApi } from "./user-api.interface";
import { PageResponse } from "../../../shared/types/pagination.types";

export const createUserService = (api: IUserApi) => ({

    async getUsers(page = 0, size = 50): Promise<PageResponse<User>> {
        const res = await api.getUsers(page, size);
        return res;
    },

    async newUser(data: CreateUserDTO): Promise<User> {
        const res = await api.newUser(data);
        return res;
    },

    async updateUser(data: UpdateUserDTO): Promise<User> {
        const res = await api.updateUser(data);
        return res;
    },

    async deleteUser(id: number): Promise<void> {
        const res = await api.deleteUser(id);
        return res;
    },

    async getManagers(roleId: number): Promise<HierarchyUserDTO[]> {
        const res = await api.getManagers(roleId);
        return res;
    },

    async downloadReport(page = 0, size = 50): Promise<void> {
        const blob = await api.getReport(page, size);

        const url = window.URL.createObjectURL(
            new Blob([blob], { type: "application/pdf" })
        );

        const link = document.createElement("a");
        link.href = url;
        link.download = "users-report.pdf";
        link.click();

        window.URL.revokeObjectURL(url);
    }

});
