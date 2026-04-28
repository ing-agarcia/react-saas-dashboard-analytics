import { useState, useEffect, useRef } from "react";
import { Settings, LogOut } from "lucide-react";
import { useAuth } from "../../modules/auth/context/AuthContext";

export default function UserMenu() {
    const { user, logout } = useAuth();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleMenu = () => setOpenMenu(prev => !prev);

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="flex items-center gap-4 relative">
            <div className="text-right">
                <h2 className="font-semibold text-lg leading-tight">
                    {user?.name || "Usuario"}
                </h2>
                <p className="text-sm text-[--text-secondary]">
                    {user?.role || "Invitado"}
                </p>
            </div>

            <div className="relative">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt={user?.name || "Usuario"}
                    className="w-12 h-12 rounded-full border border-[--border-panel] cursor-pointer hover:opacity-80 transition"
                    onClick={toggleMenu}
                />

                {openMenu && (
                    <div className="absolute right-0 mt-3 w-44 rounded-xl border border-[--border-panel] bg-[--bg-panel] text-[--text-primary] shadow-xl z-50 backdrop-blur-md">
                        <button className="flex items-center gap-2 px-4 py-2 w-full text-sm hover:bg-[--bg-btn-hover] transition rounded-lg">
                            <Settings className="w-4 h-4 text-[--accent]" />
                            Settings
                        </button>

                        <button
                            onClick={logout}
                            className="flex items-center gap-2 px-4 py-2 w-full text-sm text-[--error] hover:bg-[--bg-btn-hover] transition rounded-lg cursor-pointer"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}