
import {
    ContentCopyRounded,
    SmartToyRounded,
} from "@mui/icons-material";

import {
    Avatar,
    Box,
    IconButton,
    Paper,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

export default function ChatMessage({
    message,
}) {
    const isUser = message.role === "user";

    const copyMessage = async () => {
        try {
            await navigator.clipboard.writeText(
                message.content
            );
        } catch {
            // Clipboard may be unavailable
        }
    };

    return (
        <MotionBox
            initial={{
                opacity: 0,
                y: 12,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            sx={{
                display: "flex",

                justifyContent: isUser
                    ? "flex-end"
                    : "flex-start",

                mb: {
                    xs: 1.5,
                    sm: 2,
                },

                width: "100%",
                minWidth: 0,
            }}
        >
            <Stack
                direction={
                    isUser ? "row-reverse" : "row"
                }
                spacing={{
                    xs: 0.8,
                    sm: 1.2,
                }}
                alignItems="flex-start"
                sx={{
                    maxWidth: {
                        xs: "94%",
                        sm: "78%",
                        md: "72%",
                    },

                    minWidth: 0,
                }}
            >
                {/* AI Avatar */}
                {!isUser && (
                    <MotionAvatar
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        sx={{
                            width: {
                                xs: 30,
                                sm: 34,
                            },

                            height: {
                                xs: 30,
                                sm: 34,
                            },

                            flexShrink: 0,

                            background:
                                "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                            boxShadow:
                                "0 4px 14px rgba(124,92,252,0.20)",
                        }}
                    >
                        <SmartToyRounded
                            sx={{
                                fontSize: {
                                    xs: 16,
                                    sm: 18,
                                },
                            }}
                        />
                    </MotionAvatar>
                )}

                <Box
                    sx={{
                        minWidth: 0,
                    }}
                >
                    {/* Message Bubble */}
                    <Paper
                        elevation={0}
                        sx={{
                            px: {
                                xs: 1.5,
                                sm: 2,
                            },

                            py: {
                                xs: 1.15,
                                sm: 1.5,
                            },

                            borderRadius: isUser
                                ? "18px 4px 18px 18px"
                                : "4px 18px 18px 18px",

                            // User message
                            ...(isUser
                                ? {
                                    background:
                                        "linear-gradient(135deg, #7C5CFC, #5B4AE8)",

                                    color: "#FFFFFF",

                                    boxShadow:
                                        "0 6px 18px rgba(124,92,252,0.18)",
                                }
                                : {
                                    // AI message
                                    bgcolor:
                                        "background.paper",

                                    color:
                                        "text.primary",

                                    border: "1px solid",
                                    borderColor:
                                        "divider",

                                    boxShadow:
                                        "0 4px 14px rgba(15,23,42,0.04)",
                                }),

                            transition:
                                "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",

                            wordBreak: "break-word",
                            overflowWrap: "anywhere",
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="inherit"
                            sx={{
                                lineHeight: {
                                    xs: 1.65,
                                    sm: 1.75,
                                },

                                fontSize: {
                                    xs: 13.5,
                                    sm: 14,
                                },

                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {message.content}
                        </Typography>
                    </Paper>

                    {/* Copy */}
                    {!isUser && (
                        <Tooltip title="Copy message">
                            <IconButton
                                size="small"
                                onClick={copyMessage}
                                sx={{
                                    mt: 0.3,
                                    ml: 0.5,

                                    width: 30,
                                    height: 30,

                                    color: "text.secondary",

                                    "&:hover": {
                                        color: "primary.main",
                                        bgcolor:
                                            "action.hover",
                                    },

                                    transition:
                                        "color 0.2s ease, background-color 0.2s ease",
                                }}
                            >
                                <ContentCopyRounded
                                    sx={{
                                        fontSize: 15,
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
            </Stack>
        </MotionBox>
    );
}

