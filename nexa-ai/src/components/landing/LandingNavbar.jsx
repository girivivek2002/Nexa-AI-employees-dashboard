import { AutoAwesomeRounded } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: 2,
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

                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                >
                    <Button
                        onClick={() => navigate("/dashboard")}
                        sx={{
                            color: "text.secondary",
                            display: {
                                xs: "none",
                                sm: "inline-flex",
                            },

                            "&:hover": {
                                color: "text.primary",
                                bgcolor: "action.hover",
                            },
                        }}
                    >
                        Dashboard
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<AutoAwesomeRounded />}
                        onClick={() => navigate("/assistant")}
                        sx={{
                            background:
                                "linear-gradient(135deg, #7C5CFC, #5B4AE8)",

                            boxShadow:
                                "0 10px 30px rgba(124,92,252,0.25)",

                            "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow:
                                    "0 14px 35px rgba(124,92,252,0.4)",
                            },

                            transition: "all 0.25s ease",
                        }}
                    >
                        Try AI
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default LandingNavbar;