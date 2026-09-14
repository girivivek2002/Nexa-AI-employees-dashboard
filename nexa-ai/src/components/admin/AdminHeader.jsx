import {
    AutoAwesomeRounded,
    ShieldRounded,
} from "@mui/icons-material";

import {
    Box,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

export default function AdminHeader() {
    return (
        <Box
            sx={{
                mb: {
                    xs: 3,
                    md: 4,
                },

                p: {
                    xs: 2.5,
                    sm: 3,
                    md: 4,
                },

                borderRadius: {
                    xs: 3,
                    md: 4,
                },

                position: "relative",
                overflow: "hidden",

                background:
                    "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(168,85,247,0.08))",

                border:
                    "1px solid rgba(99,102,241,0.15)",

                "&::before": {
                    content: '""',
                    position: "absolute",

                    width: 220,
                    height: 220,

                    borderRadius: "50%",

                    background:
                        "rgba(99,102,241,0.10)",

                    filter: "blur(70px)",

                    top: -140,
                    right: -80,
                },
            }}
        >
            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                alignItems={{
                    xs: "flex-start",
                    sm: "center",
                }}
                justifyContent="space-between"
                spacing={2}
                sx={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 1 }}
                    >
                        <AutoAwesomeRounded
                            sx={{
                                color: "primary.main",
                                fontSize: 24,

                                animation:
                                    "adminSparkle 3s ease-in-out infinite",

                                "@keyframes adminSparkle":
                                {
                                    "0%, 100%": {
                                        transform:
                                            "rotate(0deg) scale(1)",
                                    },
                                    "50%": {
                                        transform:
                                            "rotate(10deg) scale(1.15)",
                                    },
                                },
                            }}
                        />

                        <Typography
                            sx={{
                                fontWeight: 800,
                                fontSize: {
                                    xs: "1.7rem",
                                    sm: "2rem",
                                    md: "2.25rem",
                                },
                                letterSpacing:
                                    "-0.03em",
                            }}
                        >
                            Admin Dashboard
                        </Typography>
                    </Stack>

                    <Typography
                        color="text.secondary"
                        sx={{
                            maxWidth: 620,
                            lineHeight: 1.7,
                            fontSize: {
                                xs: "0.88rem",
                                sm: "0.95rem",
                            },
                        }}
                    >
                        Manage your NEXA AI users,
                        contact messages and quote
                        requests from one place.
                    </Typography>
                </Box>

                <Chip
                    icon={<ShieldRounded />}
                    label="Admin Access"
                    color="primary"
                    variant="outlined"
                    sx={{
                        fontWeight: 700,
                        borderRadius: 2,
                    }}
                />
            </Stack>
        </Box>
    );
}