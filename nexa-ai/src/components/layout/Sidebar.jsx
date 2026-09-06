
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import {
    DashboardRounded,
    SmartToyRounded,
    PeopleRounded,
    BarChartRounded,
    SettingsRounded,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const menuItems = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardRounded />,
    },
    {
        label: "AI Assistant",
        path: "/assistant",
        icon: <SmartToyRounded />,
    },
    {
        label: "Employees",
        path: "/employees",
        icon: <PeopleRounded />,
    },
    {
        label: "Analytics",
        path: "/analytics",
        icon: <BarChartRounded />,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: <SettingsRounded />,
    },
];

function SidebarContent({ onClose }) {
    return (
        <Box
            sx={{
                width: 250,
                height: "100%",
                bgcolor: "background.default",
                color: "text.primary",
                p: 2,
                boxSizing: "border-box",
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    px: 2,
                    py: 2.5,
                    mb: 2,
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={800}
                    sx={{
                        background:
                            "linear-gradient(90deg, #7C5CFC, #22D3EE)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    ✦ NEXA AI
                </Typography>

                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    Employee Intelligence
                </Typography>
            </Box>

            {/* Navigation */}
            <List disablePadding>
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        {({ isActive }) => (
                            <ListItemButton
                                sx={{
                                    mb: 0.5,
                                    borderRadius: 2,

                                    backgroundColor: isActive
                                        ? "action.selected"
                                        : "transparent",

                                    "&:hover": {
                                        backgroundColor:
                                            "action.hover",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: isActive
                                            ? "primary.main"
                                            : "text.secondary",

                                        minWidth: 40,
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: 14,
                                        fontWeight: isActive
                                            ? 600
                                            : 400,
                                    }}
                                />
                            </ListItemButton>
                        )}
                    </NavLink>
                ))}
            </List>
        </Box>
    );
}

export default function Sidebar({
    mobileOpen,
    onMobileClose,
}) {
    return (
        <>
            {/* Desktop Sidebar */}
            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    },

                    position: "fixed",
                    top: 0,
                    left: 0,

                    width: 250,
                    height: "100vh",

                    bgcolor: "background.default",

                    borderRight: "1px solid",
                    borderColor: "divider",

                    zIndex: (theme) =>
                        theme.zIndex.drawer,

                    overflowY: "auto",

                    boxSizing: "border-box",

                    "&::-webkit-scrollbar": {
                        width: 5,
                    },

                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "divider",
                        borderRadius: 10,
                    },
                }}
            >
                <SidebarContent />
            </Box>

            {/* Mobile Sidebar */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={onMobileClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {
                        xs: "block",
                        md: "none",
                    },

                    "& .MuiDrawer-paper": {
                        width: 250,
                        bgcolor: "background.default",
                        backgroundImage: "none",
                        borderRight: "1px solid",
                        borderColor: "divider",
                    },
                }}
            >
                <SidebarContent
                    onClose={onMobileClose}
                />
            </Drawer>
        </>
    );
}

