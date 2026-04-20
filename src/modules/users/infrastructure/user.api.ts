import api from "../../../shared/api/api";
import { CreateUserDTO } from "../application/dto/create-user.dto";
import { UpdateUserDTO } from "../application/dto/update-user.dto";

export const userApi = {
    async getUsers(page = 0, size = 50) {
        const res = await api.get("/users", {
            params: {
                page,
                size
            }
        });
        return res.data;
    },

    async newUser(data: CreateUserDTO) {
        const res = await api.post("/users", data);
        return res.data;
    },

    async updateUser(data: UpdateUserDTO) {
        const res = await api.put(`/users/${data.id}`, data);
        return res.data;
    },

    async deleteUser(id: number) {
        const res = await api.delete(`/users/${id}`);
        return res.data;
    },

    async getManagers(roleId: number) {
        const res = await api.get(`/users/managers/${roleId}`)
        return res.data;
    },

    async getReport(page = 0, size = 50) {
        const res = await api.get("/users/report", {
            params: { page, size },
            responseType: "blob"
        });
        return res.data;
    }
};