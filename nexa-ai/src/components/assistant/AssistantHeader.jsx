
import {
    AutoAwesomeRounded,
    DeleteOutlineRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

export default function AssistantHeader({ onClear }) {
    return (
        <MotionBox
            initial={{
                opacity: 0,
                y: 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            sx={{
                mb: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                },
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                {/* Left */}
                <Stack
                    direction="row"
                    spacing={{
                        xs: 1.2,
                        sm: 1.5,
                    }}
                    alignItems="center"
                    minWidth={0}
                >
                    {/* AI Icon */}
                    <MotionBox
                        initial={{
                            scale: 0.8,
                            rotate: -8,
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.45,
                            delay: 0.1,
                        }}
                        whileHover={{
                            scale: 1.06,
                            rotate: 3,
                        }}
                        sx={{
                            width: {
                                xs: 42,
                                sm: 48,
                            },

                            height: {
                                xs: 42,
                                sm: 48,
                            },

                            borderRadius: 2,

                            display: "grid",
                            placeItems: "center",

                            color: "#FFFFFF",

                            background:
                                "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                            boxShadow:
                                "0 10px 30px rgba(124,92,252,0.22)",

                            flexShrink: 0,

                            "& svg": {
                                fontSize: {
                                    xs: 20,
                                    sm: 24,
                                },
                            },
                        }}
                    >
                        <AutoAwesomeRounded />
                    </MotionBox>

                    {/* Title */}
                    <Box
                        sx={{
                            minWidth: 0,
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={800}
                            sx={{
                                fontSize: {
                                    xs: "1.15rem",
                                    sm: "1.35rem",
                                    md: "1.5rem",
                                },

                                color: "text.primary",

                                lineHeight: 1.2,
                            }}
                        >
                            AI Assistant
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mt: 0.4,

                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                            }}
                        >
                            Your intelligent workplace companion
                        </Typography>
                    </Box>
                </Stack>

                {/* Desktop Clear */}
                <Button
                    color="inherit"
                    startIcon={<DeleteOutlineRounded />}
                    onClick={onClear}
                    sx={{
                        display: {
                            xs: "none",
                            sm: "inline-flex",
                        },

                        color: "text.secondary",

                        border: "1px solid",
                        borderColor: "divider",

                        bgcolor: "background.paper",

                        borderRadius: 2,

                        px: 1.5,
                        py: 0.8,

                        whiteSpace: "nowrap",

                        "&:hover": {
                            color: "error.main",
                            borderColor: "error.main",
                            bgcolor: "action.hover",
                        },

                        transition:
                            "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                    }}
                >
                    Clear chat
                </Button>

                {/* Mobile Clear */}
                <Tooltip title="Clear chat">
                    <MotionIconButton
                        onClick={onClear}
                        whileHover={{
                            scale: 1.08,
                        }}
                        whileTap={{
                            scale: 0.9,
                        }}
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "none",
                            },

                            width: 40,
                            height: 40,

                            color: "text.secondary",

                            border: "1px solid",
                            borderColor: "divider",

                            bgcolor: "background.paper",

                            "&:hover": {
                                color: "error.main",
                                borderColor: "error.main",
                                bgcolor: "action.hover",
                            },
                        }}
                    >
                        <DeleteOutlineRounded fontSize="small" />
                    </MotionIconButton>
                </Tooltip>
            </Stack>
        </MotionBox>
    );
}

