import {
    SmartToyRounded,
} from "@mui/icons-material";

import {
    Avatar,
    Box,
    Paper,
    Stack,
} from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function TypingIndicator() {
    return (
        <Stack
            direction="row"
            spacing={1.2}
            alignItems="flex-start"
            sx={{ mb: 2 }}
        >
            <Avatar
                sx={{
                    width: 34,
                    height: 34,
                    background:
                        "linear-gradient(135deg, #7C5CFC, #22D3EE)",
                }}
            >
                <SmartToyRounded
                    sx={{ fontSize: 18 }}
                />
            </Avatar>

            <Paper
                elevation={0}
                sx={{
                    px: 2,
                    py: 1.7,
                    borderRadius:
                        "4px 18px 18px 18px",
                    background:
                        "rgba(255,255,255,0.045)",
                    border:
                        "1px solid rgba(255,255,255,0.06)",
                }}
            >
                <Stack
                    direction="row"
                    spacing={0.5}
                >
                    {[0, 1, 2].map((item) => (
                        <MotionBox
                            key={item}
                            animate={{
                                y: [0, -5, 0],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: item * 0.15,
                            }}
                            sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor:
                                    "text.secondary",
                            }}
                        />
                    ))}
                </Stack>
            </Paper>
        </Stack>
    );
}