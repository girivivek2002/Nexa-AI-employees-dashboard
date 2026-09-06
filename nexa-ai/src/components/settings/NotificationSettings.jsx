
import {
    Box,
    Divider,
    FormControlLabel,
    Switch,
    Typography,
} from "@mui/material";

import {
    EmailRounded,
    AutoAwesomeRounded,
    PeopleRounded,
    AssessmentRounded,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { setNotification } from "../../store/slices/settingsSlice";

const notificationOptions = [
    {
        key: "email",
        title: "Email Notifications",
        description:
            "Receive important updates through email.",
        icon: <EmailRounded />,
    },
    {
        key: "aiInsights",
        title: "AI Insights",
        description:
            "Get notified when NEXA detects useful insights.",
        icon: <AutoAwesomeRounded />,
    },
    {
        key: "employeeUpdates",
        title: "Employee Updates",
        description:
            "Receive updates about employee activity.",
        icon: <PeopleRounded />,
    },
    {
        key: "weeklyReport",
        title: "Weekly Reports",
        description:
            "Receive a weekly workforce summary.",
        icon: <AssessmentRounded />,
    },
];

const MotionBox = motion(Box);

export default function NotificationSettings() {
    const dispatch = useDispatch();

    const notifications = useSelector(
        (state) => state.settings.notifications
    );

    const handleToggle = (key, value) => {
        dispatch(
            setNotification({
                key,
                value,
            })
        );
    };

    return (
        <Box
            sx={{
                width: "100%",
            }}
        >
            {notificationOptions.map((item, index) => {
                const enabled = Boolean(
                    notifications[item.key]
                );

                return (
                    <Box key={item.key}>
                        {index !== 0 && (
                            <Divider
                                sx={{
                                    my: 1,
                                }}
                            />
                        )}

                        <MotionBox
                            whileHover={{
                                x: 2,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent:
                                    "space-between",

                                py: {
                                    xs: 1.25,
                                    sm: 1.5,
                                },

                                px: {
                                    xs: 0.5,
                                    sm: 1,
                                },

                                gap: 2,

                                borderRadius: 2,

                                transition:
                                    "background-color 0.2s ease",

                                "&:hover": {
                                    bgcolor:
                                        "action.hover",
                                },
                            }}
                        >
                            {/* Left Content */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",

                                    gap: {
                                        xs: 1.25,
                                        sm: 2,
                                    },

                                    minWidth: 0,
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: {
                                            xs: 38,
                                            sm: 40,
                                        },

                                        height: {
                                            xs: 38,
                                            sm: 40,
                                        },

                                        borderRadius: 2,

                                        display: "grid",
                                        placeItems: "center",

                                        color: "primary.main",

                                        // Theme-aware
                                        bgcolor:
                                            "action.hover",

                                        flexShrink: 0,

                                        transition:
                                            "background-color 0.25s ease, color 0.25s ease",

                                        ...(enabled && {
                                            bgcolor:
                                                "action.selected",
                                        }),

                                        "& svg": {
                                            fontSize: {
                                                xs: 19,
                                                sm: 20,
                                            },
                                        },
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                {/* Text */}
                                <Box
                                    sx={{
                                        minWidth: 0,
                                    }}
                                >
                                    <Typography
                                        fontWeight={600}
                                        sx={{
                                            fontSize: {
                                                xs: 13.5,
                                                sm: 14,
                                            },

                                            color:
                                                "text.primary",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mt: 0.25,

                                            fontSize: {
                                                xs: 12,
                                                sm: 13,
                                            },

                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Switch */}
                            <FormControlLabel
                                sx={{
                                    m: 0,
                                    flexShrink: 0,
                                }}
                                control={
                                    <Switch
                                        checked={enabled}
                                        onChange={(event) =>
                                            handleToggle(
                                                item.key,
                                                event
                                                    .target
                                                    .checked
                                            )
                                        }
                                        color="primary"
                                    />
                                }
                                label=""
                            />
                        </MotionBox>
                    </Box>
                );
            })}
        </Box>
    );
}
