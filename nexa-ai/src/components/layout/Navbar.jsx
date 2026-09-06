
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";

import {
    NotificationsNoneRounded,
    MenuRounded,
    LightModeRounded,
    DarkModeRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { setThemeMode } from "../../store/slices/settingsSlice";
// ⬆️ Change this path if your settingsSlice is located somewhere else.

const MotionIconButton = motion(IconButton);
const MotionAvatar = motion(Avatar);

export default function Navbar({ onMenuClick }) {
    const theme = useTheme();
    const dispatch = useDispatch();

    const mode = useSelector(
        (state) => state.settings.themeMode
    );

    const isDark = mode === "dark";

    const handleThemeToggle = () => {
        dispatch(
            setThemeMode(isDark ? "light" : "dark")
        );
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                backgroundImage: "none",

                borderBottom: "1px solid",
                borderColor: "divider",

                backdropFilter: "blur(16px)",

                transition:
                    "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",

                zIndex: theme.zIndex.appBar,

                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(90deg, rgba(124,92,252,0.04), transparent 35%, rgba(34,211,238,0.04))",
                },
            }}
        >
            <Toolbar
                sx={{
                    minHeight: {
                        xs: 64,
                        sm: 68,
                    },

                    px: {
                        xs: 1.5,
                        sm: 2.5,
                        md: 3,
                    },

                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Mobile Menu */}
                <Box
                    sx={{
                        display: {
                            xs: "block",
                            md: "none",
                        },
                        mr: 1,
                    }}
                >
                    <Tooltip title="Menu">
                        <MotionIconButton
                            color="inherit"
                            onClick={onMenuClick}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                            sx={{
                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "background.paper",

                                "&:hover": {
                                    bgcolor: "action.hover",
                                    color: "primary.main",
                                },
                            }}
                        >
                            <MenuRounded />
                        </MotionIconButton>
                    </Tooltip>
                </Box>

                {/* Workspace */}
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                        flex: 1,
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{
                            fontWeight: 700,
                            color: "text.primary",
                        }}
                    >
                        Employee Workspace
                    </Typography>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                    >
                        Manage your workforce intelligently
                    </Typography>
                </Box>

                {/* Mobile Brand */}
                <Typography
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none",
                        },

                        flex: 1,
                        fontWeight: 800,

                        background:
                            "linear-gradient(90deg, #7C5CFC, #22D3EE)",

                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    ✦ NEXA AI
                </Typography>

                {/* Right Actions */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: {
                            xs: 0.5,
                            sm: 1,
                        },
                    }}
                >
                    {/* Theme Toggle */}
                    <Tooltip
                        title={
                            isDark
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                    >
                        <MotionIconButton
                            onClick={handleThemeToggle}
                            color="inherit"
                            whileHover={{
                                scale: 1.08,
                                rotate: isDark ? -10 : 10,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            sx={{
                                width: {
                                    xs: 40,
                                    sm: 42,
                                },

                                height: {
                                    xs: 40,
                                    sm: 42,
                                },

                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "background.paper",

                                "&:hover": {
                                    bgcolor: "action.hover",
                                    color: "primary.main",
                                },

                                transition:
                                    "background-color 0.3s ease, border-color 0.3s ease",
                            }}
                        >
                            {isDark ? (
                                <LightModeRounded fontSize="small" />
                            ) : (
                                <DarkModeRounded fontSize="small" />
                            )}
                        </MotionIconButton>
                    </Tooltip>

                    {/* Notifications */}
                    <Tooltip title="Notifications">
                        <MotionIconButton
                            color="inherit"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                            sx={{
                                width: {
                                    xs: 40,
                                    sm: 42,
                                },

                                height: {
                                    xs: 40,
                                    sm: 42,
                                },

                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "background.paper",

                                "&:hover": {
                                    bgcolor: "action.hover",
                                    color: "primary.main",
                                },
                            }}
                        >
                            <Badge
                                variant="dot"
                                color="secondary"
                                sx={{
                                    "& .MuiBadge-badge": {
                                        minWidth: 7,
                                        height: 7,
                                    },
                                }}
                            >
                                <NotificationsNoneRounded fontSize="small" />
                            </Badge>
                        </MotionIconButton>
                    </Tooltip>

                    {/* Profile */}
                    <Tooltip title="Account">
                        <MotionAvatar
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                            sx={{
                                width: {
                                    xs: 36,
                                    sm: 40,
                                },

                                height: {
                                    xs: 36,
                                    sm: 40,
                                },

                                ml: {
                                    xs: 0.5,
                                    sm: 1,
                                },

                                fontSize: 15,
                                fontWeight: 700,

                                background:
                                    "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                                boxShadow:
                                    "0 6px 20px rgba(124,92,252,0.25)",

                                cursor: "pointer",
                            }}
                        >
                            A
                        </MotionAvatar>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

