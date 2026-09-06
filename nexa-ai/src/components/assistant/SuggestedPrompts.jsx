
import {
    GroupsRounded,
    InsightsRounded,
    PersonSearchRounded,
    TrendingUpRounded,
} from "@mui/icons-material";

import {
    Box,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";

const prompts = [
    {
        label: "Find employees",
        text: "Who works in the Engineering department?",
        icon: <PersonSearchRounded />,
    },
    {
        label: "Department insights",
        text: "Which department has the most employees?",
        icon: <GroupsRounded />,
    },
    {
        label: "Workforce growth",
        text: "How has our workforce changed recently?",
        icon: <TrendingUpRounded />,
    },
    {
        label: "Workforce analytics",
        text: "Give me an overview of our workforce.",
        icon: <InsightsRounded />,
    },
];

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

export default function SuggestedPrompts({
    onSelect,
}) {
    return (
        <Box
            sx={{
                mt: {
                    xs: 2.5,
                    sm: 3,
                },
            }}
        >
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                    display: "block",
                    mb: 1.5,
                    textAlign: "center",
                    fontWeight: 700,
                }}
            >
                Try asking
            </Typography>

            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                spacing={{
                    xs: 1,
                    sm: 1.5,
                }}
                justifyContent="center"
            >
                {prompts.map((prompt, index) => (
                    <MotionPaper
                        key={prompt.label}
                        elevation={0}
                        onClick={() =>
                            onSelect(prompt.text)
                        }
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.06,
                        }}
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        sx={{
                            p: {
                                xs: 1.25,
                                sm: 1.5,
                            },

                            flex: 1,
                            minWidth: 0,

                            cursor: "pointer",

                            borderRadius: 2.5,

                            // Theme-aware
                            bgcolor: "background.paper",

                            border: "1px solid",
                            borderColor: "divider",

                            transition:
                                "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

                            "&:hover": {
                                borderColor:
                                    "primary.main",

                                bgcolor:
                                    "action.hover",

                                boxShadow: (theme) =>
                                    theme.palette.mode ===
                                        "dark"
                                        ? "0 10px 25px rgba(0,0,0,0.18)"
                                        : "0 10px 25px rgba(15,23,42,0.06)",
                            },

                            "&:active": {
                                bgcolor:
                                    "action.selected",
                            },
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
                            <MotionBox
                                animate={{
                                    y: [0, -2, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: index * 0.2,
                                }}
                                sx={{
                                    color: "primary.main",
                                    display: "flex",
                                    flexShrink: 0,

                                    "& svg": {
                                        fontSize: {
                                            xs: 19,
                                            sm: 20,
                                        },
                                    },
                                }}
                            >
                                {prompt.icon}
                            </MotionBox>

                            <Typography
                                variant="caption"
                                fontWeight={600}
                                color="text.primary"
                                sx={{
                                    lineHeight: 1.4,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: {
                                        xs: "normal",
                                        sm: "nowrap",
                                    },
                                }}
                            >
                                {prompt.label}
                            </Typography>
                        </Stack>
                    </MotionPaper>
                ))}
            </Stack>
        </Box>
    );
}

