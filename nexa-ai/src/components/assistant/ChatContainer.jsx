
import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import EmptyChat from "./EmptyChat";
import TypingIndicator from "./TypingIndicator";

const MotionBox = motion(Box);

export default function ChatContainer({
    messages,
    isTyping,
}) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isTyping]);

    return (
        <Paper
            elevation={0}
            sx={{
                flex: 1,
                minHeight: 0,
                minWidth: 0,

                display: "flex",
                flexDirection: "column",

                overflow: "hidden",

                borderRadius: 3,

                bgcolor: "background.paper",

                border: "1px solid",
                borderColor: "divider",

                color: "text.primary",

                position: "relative",

                transition:
                    "background-color .3s ease, border-color .3s ease",

                boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                        ? "0 10px 35px rgba(0,0,0,.18)"
                        : "0 8px 30px rgba(15,23,42,.05)",
            }}
        >
            {/* Simple animated top accent */}
            <Box
                sx={{
                    height: 2,
                    flexShrink: 0,
                    overflow: "hidden",
                    bgcolor: "divider",
                }}
            >
                <MotionBox
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    sx={{
                        width: "30%",
                        height: "100%",
                        background:
                            "linear-gradient(90deg, transparent, #7C5CFC, #22D3EE, transparent)",
                        boxShadow:
                            "0 0 12px rgba(124,92,252,.6)",
                    }}
                />
            </Box>

            {/* Small AI status */}
            <Stack
                direction="row"
                alignItems="center"
                spacing={0.7}
                sx={{
                    px: { xs: 1.5, sm: 2, md: 2.5 },
                    py: 0.8,
                    flexShrink: 0,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                <MotionBox
                    animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                        boxShadow:
                            "0 0 8px rgba(34,211,238,.7)",
                    }}
                />

                <Typography
                    sx={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "text.secondary",
                        letterSpacing: "0.04em",
                    }}
                >
                    NEXA AI • ONLINE
                </Typography>
            </Stack>

            {/* Chat messages — untouched scrolling area */}
            <Box
                sx={{
                    flex: 1,
                    minHeight: 0,

                    overflowY: "auto",

                    p: {
                        xs: 1.5,
                        sm: 2,
                        md: 3,
                    },

                    scrollbarWidth: "thin",

                    scrollbarColor: (theme) =>
                        theme.palette.mode === "dark"
                            ? "#334155 transparent"
                            : "#CBD5E1 transparent",

                    "&::-webkit-scrollbar": {
                        width: 5,
                    },

                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                    },

                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "divider",
                        borderRadius: 5,

                        "&:hover": {
                            backgroundColor:
                                "text.secondary",
                        },
                    },
                }}
            >
                {messages.length === 0 ? (
                    <EmptyChat />
                ) : (
                    <>
                        {messages.map((message) => (
                            <ChatMessage
                                key={message.id}
                                message={message}
                            />
                        ))}

                        {isTyping && <TypingIndicator />}

                        <Box ref={bottomRef} />
                    </>
                )}
            </Box>
        </Paper>
    );
}

