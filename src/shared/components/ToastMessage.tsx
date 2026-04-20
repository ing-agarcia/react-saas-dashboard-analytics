import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastType } from "../../shared/types/toast";

const styles: Record<ToastType, string> = {
    success: "text-green-300 bg-green-900/40 border border-green-700",
    error: "text-red-300 bg-red-900/40 border border-red-700",
    warning: "text-yellow-300 bg-yellow-900/40 border border-yellow-700",
    info: "text-blue-300 bg-blue-900/40 border border-blue-700",
};

interface ToastMessageProps {
    type?: ToastType;
    message?: string | null;
    onClose: () => void;
}

export default function ToastMessage({
    type,
    message,
    onClose
}: ToastMessageProps) {

    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);

    }, [message, onClose]);

    if (!type || !message) return null;

    return (
        <div className="fixed top-4 right-4 z-50">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles[type]} px-4 py-3 rounded-lg shadow-lg min-w-[260px] backdrop-blur-md`}
                >
                    {message}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}