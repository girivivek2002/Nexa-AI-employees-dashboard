
import {
    Box,
    Radio,
    Typography,
} from "@mui/material";

import {
    DarkModeRounded,
    LightModeRounded,
    SettingsBrightnessRounded,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { setThemeMode } from "../../store/slices/settingsSlice";

const options = [
    {
        value: "dark",
        title: "Dark",
        description: "Best for focused work",
        icon: <DarkModeRounded />,
    },
    {
        value: "light",
        title: "Light",
        description: "Clean and bright interface",
        icon: <LightModeRounded />,
    },
    {
        value: "system",
        title: "System",
        description: "Follow your device settings",
        icon: <SettingsBrightnessRounded />,
    },
];

export default function AppearanceSettings() {
    const dispatch = useDispatch();

    const themeMode = useSelector(
        (state) => state.settings.themeMode
    );

    return (
        <Box
            sx={{
                display: "grid",

                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(3, 1fr)",
                },

                gap: {
                    xs: 1.5,
                    sm: 2,
                },

                width: "100%",
            }}
        >
            {options.map((option, index) => {
                const selected =
                    themeMode === option.value;

                return (
                    <motion.div
                        key={option.value}
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
                        style={{
                            minWidth: 0,
                        }}
                    >
                        <Box
                            onClick={() =>
                                dispatch(
                                    setThemeMode(
                                        option.value
                                    )
                                )
                            }
                            sx={{
                                p: {
                                    xs: 2,
                                    sm: 2.5,
                                },

                                height: "100%",
                                boxSizing: "border-box",

                                borderRadius: 3,

                                cursor: "pointer",

                                // Theme-aware border
                                border: "1px solid",

                                borderColor: selected
                                    ? "primary.main"
                                    : "divider",

                                // Theme-aware background
                                bgcolor: selected
                                    ? "action.selected"
                                    : "background.paper",

                                color: "text.primary",

                                position: "relative",
                                overflow: "hidden",

                                transition:
                                    "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

                                boxShadow: selected
                                    ? (theme) =>
                                        theme.palette
                                            .mode ===
                                            "dark"
                                            ? "0 8px 25px rgba(124,92,252,0.12)"
                                            : "0 8px 25px rgba(124,92,252,0.08)"
                                    : "none",

                                "&:hover": {
                                    borderColor:
                                        "primary.main",

                                    bgcolor:
                                        "action.hover",
                                },

                                // Selected accent line
                                "&::before": {
                                    content: '""',

                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,

                                    height: selected
                                        ? 3
                                        : 0,

                                    background:
                                        "linear-gradient(90deg, #7C5CFC, #22D3EE)",

                                    transition:
                                        "height 0.25s ease",
                                },
                            }}
                        >
                            {/* Top */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent:
                                        "space-between",
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: {
                                            xs: 40,
                                            sm: 42,
                                        },

                                        height: {
                                            xs: 40,
                                            sm: 42,
                                        },

                                        borderRadius: 2,

                                        display: "grid",
                                        placeItems: "center",

                                        bgcolor:
                                            "action.hover",

                                        color:
                                            "primary.main",

                                        transition:
                                            "background-color 0.25s ease, color 0.25s ease",

                                        "& svg": {
                                            fontSize: {
                                                xs: 20,
                                                sm: 22,
                                            },
                                        },
                                    }}
                                >
                                    {option.icon}
                                </Box>

                                {/* Radio */}
                                <Radio
                                    checked={selected}
                                    value={option.value}
                                    color="primary"
                                    sx={{
                                        p: 0.5,
                                    }}
                                />
                            </Box>

                            {/* Title */}
                            <Typography
                                fontWeight={700}
                                sx={{
                                    mt: 2,

                                    fontSize: {
                                        xs: 14,
                                        sm: 15,
                                    },

                                    color: "text.primary",
                                }}
                            >
                                {option.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    mt: 0.5,

                                    fontSize: {
                                        xs: 12.5,
                                        sm: 13,
                                    },

                                    lineHeight: 1.5,
                                }}
                            >
                                {option.description}
                            </Typography>
                        </Box>
                    </motion.div>
                );
            })}
        </Box>
    );
}
