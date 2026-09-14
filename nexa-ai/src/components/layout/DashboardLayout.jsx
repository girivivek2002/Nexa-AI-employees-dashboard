import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMobileMenuOpen = () => {
        setMobileOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileOpen(false);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                bgcolor: "background.default",
                color: "text.primary",
                transition:
                    "background-color 0.3s ease, color 0.3s ease",
            }}
        >
            <Sidebar
                mobileOpen={mobileOpen}
                onMobileClose={handleMobileMenuClose}
            />

            {/* Main Content */}
            <Box
                sx={{
                    ml: {
                        xs: 0,
                        md: "250px",
                    },

                    width: {
                        xs: "100%",
                        md: "calc(100% - 250px)",
                    },

                    minHeight: "100vh",
                    minWidth: 0,
                    boxSizing: "border-box",
                }}
            >
                <Navbar
                    onMenuClick={handleMobileMenuOpen}
                />

                <Box
                    component="main"
                    sx={{
                        width: "100%",
                        minWidth: 0,
                        boxSizing: "border-box",

                        p: {
                            xs: 1.5,
                            sm: 2,
                            md: 2.5,
                        },

                        m: 0,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}