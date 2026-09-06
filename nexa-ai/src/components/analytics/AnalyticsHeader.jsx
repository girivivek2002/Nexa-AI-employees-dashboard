import {
    AutoAwesomeRounded,
    CalendarMonthRounded,
    DownloadRounded,
    FilterListRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Chip,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AnalyticsHeader = () => {
    const theme = useTheme();

    const isDark = theme.palette.mode === "dark";

    return (
        <MotionBox
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                width: "100%",
                minWidth: 0,
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "flex-start", md: "center" }}
                justifyContent="space-between"
                spacing={2}
            >
                {/* ─────────────────────────────
                    Title
                ───────────────────────────── */}

                <Box sx={{ minWidth: 0 }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 0.7 }}
                    >
                        <Box
                            sx={{
                                width: 38,
                                height: 38,
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                    "linear-gradient(135deg, #7C5CFC 0%, #06B6D4 100%)",
                                color: "#fff",
                                boxShadow:
                                    "0 8px 24px rgba(124, 92, 252, 0.25)",
                            }}
                        >
                            <AutoAwesomeRounded fontSize="small" />
                        </Box>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                color: "text.primary",
                            }}
                        >
                            Analytics
                        </Typography>
                    </Stack>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            maxWidth: 650,
                            lineHeight: 1.7,
                        }}
                    >
                        Understand your workforce, discover trends, and make
                        smarter people decisions with NEXA AI.
                    </Typography>
                </Box>

                {/* ─────────────────────────────
                    Actions
                ───────────────────────────── */}

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        flexWrap: "wrap",
                        justifyContent: {
                            xs: "space-between",
                            md: "flex-end",
                        },
                        gap: 1,
                    }}
                >
                    {/* Date Range */}

                    <Chip
                        icon={<CalendarMonthRounded />}
                        label="Last 30 days"
                        variant="outlined"
                        sx={{
                            height: 42,
                            borderRadius: "12px",
                            px: 0.5,
                            borderColor: isDark
                                ? "rgba(255,255,255,0.12)"
                                : "rgba(15,23,42,0.12)",
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.03)"
                                : "rgba(255,255,255,0.7)",
                            fontWeight: 600,
                            color: "text.primary",

                            "& .MuiChip-icon": {
                                color: "#7C5CFC",
                            },

                            "&:hover": {
                                backgroundColor: isDark
                                    ? "rgba(255,255,255,0.06)"
                                    : "rgba(124,92,252,0.05)",
                            },
                        }}
                    />

                    {/* Filter */}

                    <Tooltip title="Filter analytics">
                        <IconButton
                            sx={{
                                width: 42,
                                height: 42,
                                borderRadius: "12px",
                                border: "1px solid",
                                borderColor: isDark
                                    ? "rgba(255,255,255,0.12)"
                                    : "rgba(15,23,42,0.12)",
                                color: "text.secondary",
                                backgroundColor: isDark
                                    ? "rgba(255,255,255,0.03)"
                                    : "#fff",

                                "&:hover": {
                                    color: "#7C5CFC",
                                    borderColor: "#7C5CFC",
                                    backgroundColor: isDark
                                        ? "rgba(124,92,252,0.08)"
                                        : "rgba(124,92,252,0.05)",
                                },
                            }}
                        >
                            <FilterListRounded fontSize="small" />
                        </IconButton>
                    </Tooltip>

                    {/* Export */}

                    <Button
                        variant="outlined"
                        startIcon={<DownloadRounded />}
                        sx={{
                            height: 42,
                            px: 2,
                            borderRadius: "12px",
                            textTransform: "none",
                            fontWeight: 700,
                            borderColor: isDark
                                ? "rgba(255,255,255,0.12)"
                                : "rgba(15,23,42,0.12)",
                            color: "text.primary",
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.03)"
                                : "#fff",

                            "&:hover": {
                                borderColor: "#7C5CFC",
                                color: "#7C5CFC",
                                backgroundColor: isDark
                                    ? "rgba(124,92,252,0.08)"
                                    : "rgba(124,92,252,0.05)",
                            },
                        }}
                    >
                        Export
                    </Button>
                </Stack>
            </Stack>
        </MotionBox>
    );
};

export default AnalyticsHeader;