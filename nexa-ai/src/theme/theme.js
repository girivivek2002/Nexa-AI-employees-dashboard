import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode = "dark") => {
    const isDark = mode === "dark";

    return createTheme({
        palette: {
            mode,

            primary: {
                main: "#7C5CFC",
            },

            secondary: {
                main: "#22D3EE",
            },

            background: {
                default: isDark ? "#070A12" : "#F5F7FB",
                paper: isDark ? "#101522" : "#FFFFFF",
            },

            text: {
                primary: isDark ? "#F8FAFC" : "#111827",
                secondary: isDark ? "#94A3B8" : "#64748B",
            },

            divider: isDark
                ? "rgba(255,255,255,0.08)"
                : "rgba(15,23,42,0.10)",
        },

        typography: {
            fontFamily: "Inter, Arial, sans-serif",

            h1: {
                fontWeight: 800,
                letterSpacing: "-0.03em",
            },

            h2: {
                fontWeight: 800,
                letterSpacing: "-0.02em",
            },

            h3: {
                fontWeight: 700,
            },

            button: {
                textTransform: "none",
                fontWeight: 600,
            },
        },

        shape: {
            borderRadius: 14,
        },

        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: isDark
                            ? "#070A12"
                            : "#F5F7FB",

                        transition:
                            "background-color 0.3s ease, color 0.3s ease",
                    },

                    "*": {
                        scrollbarColor: isDark
                            ? "#334155 #070A12"
                            : "#CBD5E1 #F5F7FB",
                    },
                },
            },

            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: "none",

                        border: "1px solid",
                        borderColor: "divider",

                        backgroundColor: isDark
                            ? "#101522"
                            : "#FFFFFF",

                        transition:
                            "background-color 0.3s ease, border-color 0.3s ease",
                    },
                },
            },

            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                        padding: "10px 18px",
                    },
                },
            },

            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: "none",
                    },
                },
            },
        },
    });
};

export default createAppTheme;