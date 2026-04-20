import { IRoleApi } from "./role-api.interface";
import { Role } from "../domain/role.model";

export const createRoleService = (api: IRoleApi) => ({

    async getRoles(): Promise<Role[]> {
        const res = await api.getRoles();
        return res;
    },

});