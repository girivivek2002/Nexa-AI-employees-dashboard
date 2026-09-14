
import { useState } from "react";

import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import {
    AutoAwesomeRounded,
    LockRounded,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";

import { loginUser } from "../services/authService";

import { setCredentials } from "../store/slices/authSlice";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !formData.email.trim() ||
            !formData.password
        ) {
            toast.error("Please enter email and password");
            return;
        }

        try {
            setLoading(true);

            const data = await loginUser({
                email: formData.email.trim(),
                password: formData.password,
            });

            // Update Redux authentication state
            dispatch(
                setCredentials({
                    token: data.token,
                    user: data.user,
                })
            );

            toast.success("Login successful!");

            // Give Redux/store subscription a moment to finish
            // before entering the protected dashboard.
            setTimeout(() => {
                navigate("/dashboard", {
                    replace: true,
                });
            }, 0);

        } catch (error) {
            console.error("Login error:", error);

            const message =
                error?.response?.data?.message ||
                "Unable to login. Please try again.";

            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                overflow: "hidden",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                px: {
                    xs: 2,
                    sm: 3,
                },

                py: {
                    xs: 4,
                    sm: 6,
                },

                bgcolor: "#070B14",

                /* Background glow */
                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: {
                        xs: 280,
                        sm: 420,
                    },
                    height: {
                        xs: 280,
                        sm: 420,
                    },
                    borderRadius: "50%",
                    background:
                        "rgba(99, 102, 241, 0.20)",
                    filter: "blur(80px)",
                    top: "-120px",
                    left: "-100px",
                    animation:
                        "floatGlow 8s ease-in-out infinite",
                },

                "&::after": {
                    content: '""',
                    position: "absolute",
                    width: {
                        xs: 250,
                        sm: 380,
                    },
                    height: {
                        xs: 250,
                        sm: 380,
                    },
                    borderRadius: "50%",
                    background:
                        "rgba(168, 85, 247, 0.16)",
                    filter: "blur(90px)",
                    bottom: "-120px",
                    right: "-100px",
                    animation:
                        "floatGlowReverse 10s ease-in-out infinite",
                },

                "@keyframes floatGlow": {
                    "0%, 100%": {
                        transform: "translate(0, 0) scale(1)",
                    },
                    "50%": {
                        transform:
                            "translate(50px, 35px) scale(1.12)",
                    },
                },

                "@keyframes floatGlowReverse": {
                    "0%, 100%": {
                        transform: "translate(0, 0) scale(1)",
                    },
                    "50%": {
                        transform:
                            "translate(-45px, -30px) scale(1.1)",
                    },
                },
            }}
        >
            {/* Decorative grid */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.18,
                    backgroundImage: `
linear - gradient(
    rgba(255, 255, 255, 0.04) 1px,
    transparent 1px
),
    linear - gradient(
        90deg,
        rgba(255, 255, 255, 0.04) 1px,
        transparent 1px
    )
        `,
                    backgroundSize: "45px 45px",
                    maskImage:
                        "linear-gradient(to bottom, black, transparent)",
                    pointerEvents: "none",
                }}
            />

            {/* Floating decorative circles */}
            <Box
                sx={{
                    position: "absolute",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "rgba(129, 140, 248, 0.8)",
                    top: "20%",
                    left: {
                        xs: "8%",
                        sm: "18%",
                    },
                    boxShadow:
                        "0 0 25px rgba(129,140,248,0.8)",
                    animation:
                        "pulseDot 3s ease-in-out infinite",

                    "@keyframes pulseDot": {
                        "0%, 100%": {
                            transform: "scale(1)",
                            opacity: 0.6,
                        },
                        "50%": {
                            transform: "scale(1.7)",
                            opacity: 1,
                        },
                    },
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "rgba(192, 132, 252, 0.9)",
                    bottom: "24%",
                    right: {
                        xs: "10%",
                        sm: "20%",
                    },
                    boxShadow:
                        "0 0 20px rgba(192,132,252,0.8)",
                    animation:
                        "pulseDot 4s ease-in-out infinite",
                }}
            />

            {/* Main content */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 470,
                    position: "relative",
                    zIndex: 2,

                    animation:
                        "cardEntrance 0.8s cubic-bezier(.22,1,.36,1)",

                    "@keyframes cardEntrance": {
                        from: {
                            opacity: 0,
                            transform:
                                "translateY(35px) scale(0.97)",
                        },
                        to: {
                            opacity: 1,
                            transform:
                                "translateY(0) scale(1)",
                        },
                    },
                }}
            >
                {/* Brand */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,

                            px: 2,
                            py: 1,

                            borderRadius: 3,

                            background:
                                "rgba(255,255,255,0.06)",
                            border:
                                "1px solid rgba(255,255,255,0.10)",

                            backdropFilter: "blur(12px)",

                            animation:
                                "brandFloat 4s ease-in-out infinite",

                            "@keyframes brandFloat": {
                                "0%, 100%": {
                                    transform:
                                        "translateY(0)",
                                },
                                "50%": {
                                    transform:
                                        "translateY(-5px)",
                                },
                            },
                        }}
                    >
                        <AutoAwesomeRounded
                            sx={{
                                color: "#A78BFA",
                                fontSize: 22,
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 800,
                                letterSpacing: "0.08em",
                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1rem",
                                },
                            }}
                        >
                            NEXA AI
                        </Typography>
                    </Box>
                </Box>

                {/* Card */}
                <Paper
                    elevation={0}
                    sx={{
                        width: "100%",

                        p: {
                            xs: 3,
                            sm: 4.5,
                        },

                        borderRadius: {
                            xs: 3,
                            sm: 4,
                        },

                        background:
                            "rgba(17, 24, 39, 0.72)",

                        backdropFilter:
                            "blur(24px)",

                        WebkitBackdropFilter:
                            "blur(24px)",

                        border:
                            "1px solid rgba(255,255,255,0.10)",

                        boxShadow:
                            "0 30px 80px rgba(0,0,0,0.45)",

                        transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",

                        "&:hover": {
                            transform:
                                "translateY(-3px)",
                            boxShadow:
                                "0 35px 90px rgba(0,0,0,0.55)",
                        },
                    }}
                >
                    {/* Heading */}
                    <Box sx={{ mb: 3.5 }}>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 800,

                                fontSize: {
                                    xs: "1.8rem",
                                    sm: "2.15rem",
                                },

                                lineHeight: 1.15,

                                letterSpacing:
                                    "-0.025em",
                            }}
                        >
                            Welcome back
                        </Typography>

                        <Typography
                            sx={{
                                color:
                                    "rgba(255,255,255,0.58)",
                                mt: 1,
                                fontSize: {
                                    xs: "0.9rem",
                                    sm: "0.95rem",
                                },
                                lineHeight: 1.6,
                            }}
                        >
                            Sign in to continue to your
                            intelligent hiring workspace.
                        </Typography>
                    </Box>

                    {/* Form */}
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            fullWidth
                            label="Email address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            margin="normal"
                            InputLabelProps={{
                                sx: {
                                    color:
                                        "rgba(255,255,255,0.55)",
                                    "&.Mui-focused": {
                                        color: "#A78BFA",
                                    },
                                },
                            }}
                            sx={{
                                mb: 1.5,

                                "& .MuiOutlinedInput-root": {
                                    color: "#FFFFFF",
                                    borderRadius: 2.5,

                                    background:
                                        "rgba(255,255,255,0.035)",

                                    "& fieldset": {
                                        borderColor:
                                            "rgba(255,255,255,0.12)",
                                    },

                                    "&:hover fieldset": {
                                        borderColor:
                                            "rgba(167,139,250,0.5)",
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor:
                                            "#A78BFA",
                                        borderWidth: 1,
                                    },
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            margin="normal"
                            InputLabelProps={{
                                sx: {
                                    color:
                                        "rgba(255,255,255,0.55)",
                                    "&.Mui-focused": {
                                        color: "#A78BFA",
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockRounded
                                            sx={{
                                                color:
                                                    "rgba(255,255,255,0.4)",
                                                fontSize: 20,
                                            }}
                                        />
                                    </InputAdornment>
                                ),

                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(
                                                    (prev) =>
                                                        !prev
                                                )
                                            }
                                            edge="end"
                                            sx={{
                                                color:
                                                    "rgba(255,255,255,0.45)",

                                                "&:hover": {
                                                    color:
                                                        "#A78BFA",
                                                },
                                            }}
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                mb: 2,

                                "& .MuiOutlinedInput-root": {
                                    color: "#FFFFFF",
                                    borderRadius: 2.5,

                                    background:
                                        "rgba(255,255,255,0.035)",

                                    "& fieldset": {
                                        borderColor:
                                            "rgba(255,255,255,0.12)",
                                    },

                                    "&:hover fieldset": {
                                        borderColor:
                                            "rgba(167,139,250,0.5)",
                                    },

                                    "&.Mui-focused fieldset": {
                                        borderColor:
                                            "#A78BFA",
                                        borderWidth: 1,
                                    },
                                },
                            }}
                        />

                        {/* Login button */}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                                mt: 1,
                                py: 1.5,

                                borderRadius: 2.5,

                                fontWeight: 800,
                                fontSize: "0.95rem",

                                textTransform: "none",

                                background:
                                    "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",

                                boxShadow:
                                    "0 12px 30px rgba(99,102,241,0.28)",

                                transition:
                                    "all 0.25s ease",

                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",

                                    transform:
                                        "translateY(-2px)",

                                    boxShadow:
                                        "0 16px 35px rgba(99,102,241,0.38)",
                                },

                                "&:active": {
                                    transform:
                                        "translateY(0)",
                                },

                                "&.Mui-disabled": {
                                    color:
                                        "rgba(255,255,255,0.7)",
                                    background:
                                        "rgba(124,58,237,0.55)",
                                },
                            }}
                        >
                            {loading ? (
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <CircularProgress
                                        size={19}
                                        sx={{
                                            color: "#FFFFFF",
                                        }}
                                    />

                                    <span>
                                        Logging in...
                                    </span>
                                </Stack>
                            ) : (
                                "Login to NEXA AI"
                            )}
                        </Button>
                    </Box>

                    {/* Register */}
                    <Typography
                        sx={{
                            mt: 3.5,
                            textAlign: "center",

                            color:
                                "rgba(255,255,255,0.55)",

                            fontSize: {
                                xs: "0.85rem",
                                sm: "0.9rem",
                            },
                        }}
                    >
                        Don't have an account?{" "}
                        <Typography
                            component={Link}
                            to="/register"
                            sx={{
                                color: "#A78BFA",
                                fontWeight: 700,
                                textDecoration: "none",

                                transition:
                                    "color 0.2s ease",

                                "&:hover": {
                                    color: "#C4B5FD",
                                    textDecoration:
                                        "underline",
                                },
                            }}
                        >
                            Create an account
                        </Typography>
                    </Typography>
                </Paper>

                {/* Footer */}
                <Typography
                    sx={{
                        textAlign: "center",
                        mt: 2.5,

                        color:
                            "rgba(255,255,255,0.28)",

                        fontSize: "0.75rem",
                    }}
                >
                    AI-powered recruitment. Built for
                    smarter hiring.
                </Typography>
            </Box>
        </Box>
    );
}
