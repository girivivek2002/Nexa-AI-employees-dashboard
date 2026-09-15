
import { useState } from "react";

import {
    AutoAwesomeRounded,
    CloseRounded,
    ContactSupportOutlined,
    DashboardOutlined,
    LoginRounded,
    MenuRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import FreeQuoteButton from "./FreeQuoteButton";

const LandingNavbar = () => {
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);

    const { isAuthenticated } = useSelector(
        (state) => state.auth
    );

    const handleContact = () => {
        setMobileMenuOpen(false);

        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    const handleNavigate = (path) => {
        setMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <Box
            component="header"
            sx={{
                position: "relative",
                zIndex: 20,
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                        lg: 4,
                    },
                }}
            >
                <Box
                    sx={{
                        minHeight: {
                            xs: 64,
                            sm: 72,
                            md: 80,
                        },

                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                            "space-between",

                        gap: 2,
                    }}
                >
                    {/* =========================
                        LOGO
                    ========================== */}
                    <Box
                        onClick={() =>
                            navigate("/")
                        }
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.8,

                            cursor: "pointer",
                            flexShrink: 0,

                            userSelect: "none",
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: 29,
                                    sm: 32,
                                },

                                height: {
                                    xs: 29,
                                    sm: 32,
                                },

                                display: "flex",
                                alignItems: "center",
                                justifyContent:
                                    "center",

                                borderRadius: 1.6,

                                background:
                                    "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                                boxShadow:
                                    "0 6px 18px rgba(124,92,252,0.24)",

                                color: "#fff",
                            }}
                        >
                            <AutoAwesomeRounded
                                sx={{
                                    fontSize: {
                                        xs: 16,
                                        sm: 18,
                                    },
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontWeight: 900,

                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1.1rem",
                                },

                                letterSpacing:
                                    "-0.025em",

                                whiteSpace: "nowrap",

                                background:
                                    "linear-gradient(90deg, #7C5CFC, #22D3EE)",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent",
                            }}
                        >
                            NEXA AI
                        </Typography>
                    </Box>

                    {/* =========================
                        DESKTOP NAVIGATION
                    ========================== */}
                    <Stack
                        direction="row"
                        spacing={{
                            md: 0.5,
                            lg: 1,
                        }}
                        alignItems="center"
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Button
                            onClick={() =>
                                navigate(
                                    "/dashboard"
                                )
                            }
                            sx={{
                                color:
                                    "text.secondary",

                                textTransform:
                                    "none",

                                fontWeight: 600,

                                px: {
                                    md: 1.2,
                                    lg: 1.5,
                                },

                                "&:hover": {
                                    color:
                                        "text.primary",

                                    bgcolor:
                                        "action.hover",
                                },
                            }}
                        >
                            Dashboard
                        </Button>

                        <Button
                            onClick={
                                handleContact
                            }
                            sx={{
                                color:
                                    "text.secondary",

                                textTransform:
                                    "none",

                                fontWeight: 600,

                                px: {
                                    md: 1.2,
                                    lg: 1.5,
                                },

                                "&:hover": {
                                    color:
                                        "text.primary",

                                    bgcolor:
                                        "action.hover",
                                },
                            }}
                        >
                            Contact
                        </Button>

                        {!isAuthenticated && (
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    navigate(
                                        "/login"
                                    )
                                }
                                sx={{
                                    textTransform:
                                        "none",

                                    fontWeight: 700,

                                    borderRadius: 2,

                                    px: {
                                        md: 1.5,
                                        lg: 2,
                                    },
                                }}
                            >
                                Login
                            </Button>
                        )}

                        <Button
                            variant="contained"
                            startIcon={
                                <AutoAwesomeRounded />
                            }
                            onClick={() =>
                                navigate(
                                    "/assistant"
                                )
                            }
                            sx={{
                                textTransform:
                                    "none",

                                fontWeight: 700,

                                borderRadius: 2,

                                px: {
                                    md: 1.5,
                                    lg: 2,
                                },

                                background:
                                    "linear-gradient(135deg, #7C5CFC, #5B4AE8)",

                                boxShadow:
                                    "0 8px 24px rgba(124,92,252,0.24)",

                                transition:
                                    "all 0.25s ease",

                                "&:hover": {
                                    transform:
                                        "translateY(-2px)",

                                    boxShadow:
                                        "0 12px 30px rgba(124,92,252,0.38)",
                                },
                            }}
                        >
                            Try AI
                        </Button>

                        <FreeQuoteButton>
                            Get a Free Quote
                        </FreeQuoteButton>
                    </Stack>

                    {/* =========================
                        MOBILE MENU BUTTON
                    ========================== */}
                    <IconButton
                        onClick={() =>
                            setMobileMenuOpen(
                                (prev) => !prev
                            )
                        }
                        aria-label="Toggle navigation menu"
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                            },

                            width: 40,
                            height: 40,

                            borderRadius: 2,

                            border: "1px solid",
                            borderColor: "divider",

                            bgcolor:
                                mobileMenuOpen
                                    ? "action.selected"
                                    : "background.paper",

                            transition:
                                "all 0.2s ease",

                            "&:hover": {
                                borderColor:
                                    "primary.main",

                                bgcolor:
                                    "action.hover",
                            },
                        }}
                    >
                        {mobileMenuOpen ? (
                            <CloseRounded />
                        ) : (
                            <MenuRounded />
                        )}
                    </IconButton>
                </Box>

                {/* =========================
                    MOBILE NAVIGATION
                ========================== */}
                <Box
                    sx={{
                        display: {
                            xs: "grid",
                            md: "none",
                        },

                        gridTemplateRows:
                            mobileMenuOpen
                                ? "1fr"
                                : "0fr",

                        opacity:
                            mobileMenuOpen
                                ? 1
                                : 0,

                        transition:
                            "grid-template-rows 0.3s ease, opacity 0.25s ease",

                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            minHeight: 0,
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                mb: 2,

                                p: 1.5,

                                border: "1px solid",
                                borderColor:
                                    "divider",

                                borderRadius: 3,

                                bgcolor:
                                    "background.paper",

                                boxShadow:
                                    "0 16px 45px rgba(0,0,0,0.08)",
                            }}
                        >
                            {/* Normal navigation */}
                            <Stack spacing={0.4}>
                                <Button
                                    fullWidth
                                    startIcon={
                                        <DashboardOutlined />
                                    }
                                    onClick={() =>
                                        handleNavigate(
                                            "/dashboard"
                                        )
                                    }
                                    sx={{
                                        justifyContent:
                                            "flex-start",

                                        color:
                                            "text.secondary",

                                        textTransform:
                                            "none",

                                        fontWeight:
                                            600,

                                        borderRadius:
                                            2,

                                        py: 1,

                                        px: 1.5,

                                        "&:hover": {
                                            color:
                                                "text.primary",

                                            bgcolor:
                                                "action.hover",
                                        },
                                    }}
                                >
                                    Dashboard
                                </Button>

                                <Button
                                    fullWidth
                                    startIcon={
                                        <ContactSupportOutlined />
                                    }
                                    onClick={
                                        handleContact
                                    }
                                    sx={{
                                        justifyContent:
                                            "flex-start",

                                        color:
                                            "text.secondary",

                                        textTransform:
                                            "none",

                                        fontWeight:
                                            600,

                                        borderRadius:
                                            2,

                                        py: 1,

                                        px: 1.5,

                                        "&:hover": {
                                            color:
                                                "text.primary",

                                            bgcolor:
                                                "action.hover",
                                        },
                                    }}
                                >
                                    Contact
                                </Button>
                            </Stack>

                            <Divider
                                sx={{
                                    my: 1.3,
                                }}
                            />

                            {/* Mobile CTAs */}
                            <Stack spacing={1}>
                                {!isAuthenticated && (
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        startIcon={
                                            <LoginRounded />
                                        }
                                        onClick={() =>
                                            handleNavigate(
                                                "/login"
                                            )
                                        }
                                        sx={{
                                            minHeight:
                                                42,

                                            borderRadius:
                                                2,

                                            textTransform:
                                                "none",

                                            fontWeight:
                                                700,
                                        }}
                                    >
                                        Login
                                    </Button>
                                )}

                                <Button
                                    fullWidth
                                    variant="contained"
                                    startIcon={
                                        <AutoAwesomeRounded />
                                    }
                                    onClick={() =>
                                        handleNavigate(
                                            "/assistant"
                                        )
                                    }
                                    sx={{
                                        minHeight: 42,

                                        borderRadius:
                                            2,

                                        textTransform:
                                            "none",

                                        fontWeight: 700,

                                        background:
                                            "linear-gradient(135deg, #7C5CFC, #5B4AE8)",

                                        boxShadow:
                                            "0 8px 22px rgba(124,92,252,0.22)",

                                        "&:hover": {
                                            background:
                                                "linear-gradient(135deg, #8668FF, #6554F0)",
                                        },
                                    }}
                                >
                                    Try AI
                                </Button>

                                <Box
                                    sx={{
                                        width: "100%",

                                        "& > *": {
                                            width:
                                                "100%",
                                        },

                                        "& button": {
                                            width:
                                                "100%",
                                            minHeight:
                                                42,
                                        },
                                    }}
                                >
                                    <FreeQuoteButton>
                                        Get a Free Quote
                                    </FreeQuoteButton>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default LandingNavbar;

