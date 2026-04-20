import { Link, useLocation } from "react-router-dom";

interface ButtonNavProps {
    label: string;
    to: string;
}

export default function ButtonNav({ label, to }: ButtonNavProps) {
    const location = useLocation();

    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`btn-nav ${isActive ? "btn-nav-active" : ""}`}
        >
            {label}
        </Link>
    );
}