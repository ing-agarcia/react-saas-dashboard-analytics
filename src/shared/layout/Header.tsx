import UserMenu from "./UserMenu";
import ButtonNav from "./ButtonNav";

export default function Header() {
    return (
        <header className="header">
            <div className="header-nav">
                <ButtonNav label="Users" to="/users" />
                <ButtonNav label="Products" to="/products" />
                <ButtonNav label="Dashboard" to="/dashboard" />
                <ButtonNav label="Forecast" to="/forecast" />
            </div>

            <UserMenu />
        </header>
    );
}