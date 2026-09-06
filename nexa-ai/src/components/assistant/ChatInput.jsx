
import {
    ArrowUpwardRounded,
    MicNoneRounded,
} from "@mui/icons-material";

import {

    IconButton,
    InputBase,
    Paper,
    Tooltip,
} from "@mui/material";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MotionIconButton = motion(IconButton);

export default function ChatInput({
    onSend,
    disabled,
}) {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const submit = () => {
        const message = value.trim();

        if (!message || disabled) {
            return;
        }

        onSend(message);
        setValue("");
    };

    const handleKeyDown = (event) => {
        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();
            submit();
        }
    };

    const startVoiceInput = () => {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            return;
        }

        const recognition =
            new SpeechRecognition();

        recognition.lang = "en-US";

        recognition.onresult = (event) => {
            const transcript =
                event.results[0][0].transcript;

            setValue((current) =>
                current
                    ? `${current} ${transcript} `
                    : transcript
            );

            inputRef.current?.focus();
        };

        recognition.start();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const hasValue = Boolean(value.trim());

    return (
        <Paper
            elevation={0}
            sx={{
                mt: 1.5,

                p: {
                    xs: 0.6,
                    sm: 0.8,
                },

                display: "flex",
                alignItems: "flex-end",

                borderRadius: 2.5,

                // Theme-aware
                bgcolor: "background.paper",

                border: "1px solid",
                borderColor: "divider",

                color: "text.primary",

                transition:
                    "background-color 0.3s ease, border-color 0.2s ease, box-shadow 0.2s ease",

                "&:focus-within": {
                    borderColor: "primary.main",

                    boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                            ? "0 0 0 3px rgba(124,92,252,0.10)"
                            : "0 0 0 3px rgba(124,92,252,0.08)",
                },
            }}
        >
            {/* Input */}
            <InputBase
                inputRef={inputRef}
                multiline
                maxRows={5}
                fullWidth
                value={value}
                disabled={disabled}
                onChange={(event) =>
                    setValue(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask NEXA anything..."
                sx={{
                    px: {
                        xs: 1,
                        sm: 1.2,
                    },

                    py: {
                        xs: 0.7,
                        sm: 0.8,
                    },

                    fontSize: {
                        xs: 13,
                        sm: 14,
                    },

                    lineHeight: 1.6,

                    color: "text.primary",

                    "& input::placeholder, & textarea::placeholder": {
                        color: "text.secondary",
                        opacity: 1,
                    },
                }}
            />

            {/* Voice */}
            <Tooltip title="Voice input">
                <MotionIconButton
                    onClick={startVoiceInput}
                    disabled={disabled}
                    whileHover={{
                        scale: 1.08,
                    }}
                    whileTap={{
                        scale: 0.92,
                    }}
                    sx={{
                        mb: 0.2,

                        width: {
                            xs: 38,
                            sm: 40,
                        },

                        height: {
                            xs: 38,
                            sm: 40,
                        },

                        color: "text.secondary",

                        flexShrink: 0,

                        "&:hover": {
                            color: "primary.main",
                            bgcolor: "action.hover",
                        },

                        "&.Mui-disabled": {
                            color: "text.disabled",
                        },
                    }}
                >
                    <MicNoneRounded fontSize="small" />
                </MotionIconButton>
            </Tooltip>

            {/* Send */}
            <Tooltip title="Send message">
                <MotionIconButton
                    onClick={submit}
                    disabled={
                        disabled || !hasValue
                    }
                    whileHover={
                        hasValue && !disabled
                            ? {
                                scale: 1.06,
                                y: -1,
                            }
                            : {}
                    }
                    whileTap={
                        hasValue && !disabled
                            ? {
                                scale: 0.92,
                            }
                            : {}
                    }
                    sx={{
                        mb: 0.2,

                        width: {
                            xs: 38,
                            sm: 40,
                        },

                        height: {
                            xs: 38,
                            sm: 40,
                        },

                        flexShrink: 0,

                        color: "#FFFFFF",

                        background:
                            "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                        boxShadow: hasValue
                            ? "0 5px 18px rgba(124,92,252,0.25)"
                            : "none",

                        "&:hover": {
                            background:
                                "linear-gradient(135deg, #7C5CFC, #22D3EE)",
                        },

                        "&.Mui-disabled": {
                            color: "text.disabled",
                            backgroundColor:
                                "action.disabledBackground",
                            backgroundImage: "none",
                            boxShadow: "none",
                        },

                        transition:
                            "background-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                >
                    <ArrowUpwardRounded fontSize="small" />
                </MotionIconButton>
            </Tooltip>
        </Paper>
    );
}
