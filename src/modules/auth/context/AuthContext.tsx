import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authService } from "../application/auth.service";
import { setAuthToken } from "../../../shared/api/api";
import { useToast } from "../../../shared/context/ToastContext";
import { User } from "../../users/domain/user.model";

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (emailUser: string, passwordUser: string) => Promise<{ success: boolean }>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { showToast } = useToast();

    // Cargar sesión al iniciar App
    useEffect(() => {
        const init = async () => {
            const storedToken = localStorage.getItem("token");
            const storedUser = localStorage.getItem("user");

            if (!storedToken || !storedUser) {
                setLoading(false);
                return;
            }

            setAuthToken(storedToken);

            const isValid = await authService.validateToken();

            if (!isValid) {
                clearSession();
            } else {
                setToken(storedToken);
                setUser(JSON.parse(storedUser));
            }

            setLoading(false);

        };

        init();
    }, []);

    const clearSession = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuthToken(null);
    };

    const login = async (emailUser: string, passwordUser: string): Promise<{ success: boolean }> => {
        clearSession();

        try {
            const { token, user } = await authService.login(emailUser, passwordUser);

            if (!token || !user) {
                showToast("error", "Token invalido");
                return { success: false };
            }

            setToken(token);
            setUser(user);
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // setear header para futuras requests
            setAuthToken(token);

            return { success: true };

        } catch (error: any) {
            showToast("error", error.response?.data?.message || "Incorrect username or password");
            return { success: false };
        }

    };

    const logout = () => {
        clearSession();
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};