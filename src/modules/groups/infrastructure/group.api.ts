import api from "../../../shared/api/api";

export const groupApi = {
    async getGroups() {
        const res = await api.get("/groups");
        return res.data;
    },
}