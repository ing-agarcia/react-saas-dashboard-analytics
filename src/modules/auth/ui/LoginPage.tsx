import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [emailUser, setEmail] = useState("");
    const [passwordUser, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/users";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await login(emailUser, passwordUser);

        if (!result.success) {
            return;
        }

        navigate(from, { replace: true });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-[--gradient-from] via-[--gradient-via] to-[--gradient-to]">

            <div className="bg-[--bg-panel] backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-[--border-panel]">

                <div className="text-center">
                    <img
                        alt="Logo"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=cyan&shade=400"
                        className="mx-auto h-12 w-12"
                    />

                    <h2 className="mt-6 text-3xl font-semibold text-[--text-primary] tracking-tight">
                        Welcome Back
                    </h2>

                    <p className="mt-2 text-sm text-[--text-secondary]">
                        Sign in to access your account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-[--text-secondary] mb-1">
                            Email address
                        </label>

                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={emailUser}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            className="input"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[--text-secondary] mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            value={passwordUser}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            className="input"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Sign In
                    </button>

                </form>
            </div>
        </div>
    );
}