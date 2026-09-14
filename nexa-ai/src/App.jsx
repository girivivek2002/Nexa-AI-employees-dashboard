import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import Employees from "./pages/Employees";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import DashboardLayout from "./components/layout/DashboardLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import Admin from "./pages/Admin";
import AdminRoute from "./components/auth/AdminRoute";

function App() {
  return (
    <>
      <Routes>

        {/* PUBLIC */}

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* PROTECTED */}

        <Route
          element={<ProtectedRoute />}
        >
          <Route
            element={<DashboardLayout />}
          >
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/assistant"
              element={<Assistant />}
            />

            <Route
              path="/employees"
              element={<Employees />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />
          </Route>
        </Route>
        <Route element={<AdminRoute />}>
          <Route
            path="/admin"
            element={<Admin />}
          />
        </Route>

      </Routes>

      <ToastContainer
        position="bottom-right"
        theme="dark"
      />
    </>
  );
}

export default App;