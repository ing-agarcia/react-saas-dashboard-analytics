import api from "../../../shared/api/api";

export const roleApi = {
    async getRoles() {
        const res = await api.get("/roles");
        return res.data;
    },
}