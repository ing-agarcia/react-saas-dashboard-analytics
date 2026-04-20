import { createContext, useContext, useState, useCallback } from "react";
import ToastMessage from "../components/ToastMessage";
import { ToastType } from "../../shared/types/toast";

type ToastState = {
    type: ToastType | null;
    message: string | null;
};

interface ToastContextType {
    showToast: (type: ToastType, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {

    const [toast, setToast] = useState<ToastState>({
        type: null,
        message: null
    });

    const showToast = useCallback((type: ToastType, message: string) => {
        setToast({ type, message });
    }, []);

    const clearToast = useCallback(() => {
        setToast({ type: null, message: null });
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <ToastMessage
                type={toast.type ?? undefined}
                message={toast.message}
                onClose={clearToast}
            />
        </ToastContext.Provider>
    );
}

export function useToast() {

    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used within ToastProvider");
    }

    return context;
}