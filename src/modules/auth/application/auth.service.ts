import api from "../../../shared/api/api";

export const authService = {
    async login(emailUser: String, passwordUser: String) {
        const response = await api.post("/auth/login", { emailUser, passwordUser });
        const { token, user } = response.data;

        return {
            token,
            user,
        };
    },

    async validateToken() {
        try {
            const response = await api.get("/auth/validate");
            return response.data.valid === true;
        } catch {
            return false;
        }
    },
};