import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute() {
    const { user, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    // Not logged in
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    // Logged in but not an admin
    if (user?.role !== "admin") {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return <Outlet />;
}