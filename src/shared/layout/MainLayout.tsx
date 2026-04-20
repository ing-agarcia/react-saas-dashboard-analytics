import Header from "./Header";

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="layout">
            <Header />

            <main className="layout-main">
                {children}
            </main>
        </div>
    );
}