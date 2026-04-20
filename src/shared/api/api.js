import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// helper para setear/quitar token explícitamente
export function setAuthToken(token) {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
}

// Interceptor de request opcional (si decides mantenerlo)
// Lo puedes quitar si ya usas setAuthToken desde AuthContext
api.interceptors.request.use((config) => {
    // Si quieres usar el token desde localStorage como fallback:
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Interceptor de response: no navegues ni borres storage aquí.
// Solo propaga el error hacia la capa superior (AuthContext / UI).
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Opción: puedes marcar el error con una flag para que AuthContext actúe
        // if (error.response?.status === 401) {
        //   error.isAuthError = true;
        // }
        return Promise.reject(error);
    }
);

export default api;