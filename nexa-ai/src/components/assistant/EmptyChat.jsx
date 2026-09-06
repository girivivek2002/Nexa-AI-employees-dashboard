import { AutoAwesomeRounded } from "@mui/icons-material";

import {
    Box,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function EmptyChat() {
    return (
        <MotionBox
            initial={{
                opacity: 0,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
            }}
            sx={{
                flex: 1,
                minHeight: 350,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 3,
            }}
        >
            <MotionBox
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    width: 72,
                    height: 72,
                    borderRadius: 3,
                    display: "grid",
                    placeItems: "center",
                    mb: 3,
                    background:
                        "linear-gradient(135deg, #7C5CFC, #22D3EE)",
                    boxShadow:
                        "0 15px 45px rgba(124,92,252,0.25)",
                }}
            >
                <AutoAwesomeRounded
                    sx={{ fontSize: 34 }}
                />
            </MotionBox>

            <Typography
                variant="h5"
                fontWeight={800}
            >
                How can I help you?
            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    mt: 1,
                    maxWidth: 480,
                    lineHeight: 1.7,
                }}
            >
                Ask me about employees, departments,
                workforce insights or anything related
                to your workplace.
            </Typography>
        </MotionBox>
    );
}