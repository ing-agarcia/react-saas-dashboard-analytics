import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./modules/auth/context/AuthContext";
import { ToastProvider } from "./shared/context/ToastContext";
import LoginPage from "./modules/auth//ui/LoginPage";
import MainLayout from "./shared/layout/MainLayout";
import UsersPage from "./modules/users/ui/UsersPage";
import ProductsPage from "./modules/products/ui/ProductsPage";
import DashboardPage from "./modules/dashboard/ui/dashboardPage";
import ForecastPage from "./modules/ml/forecast/ui/forecastPage";

function PrivateRoute({ children }) {
  const { token, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="text-white text-center mt-10">Cargando...</div>;

  // Si no hay token, guardamos la ruta actual en state -> /login?from=...
  return token ? children : <Navigate to="/login" replace state={{ from: location }} />;
}

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>

          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <UsersPage />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <ProductsPage />
                  </MainLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <DashboardPage />
                  </MainLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/forecast"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <ForecastPage />
                  </MainLayout>
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/users" replace />} />
          </Routes>

        </AuthProvider>
      </ToastProvider>
    </Router>
  );
}
