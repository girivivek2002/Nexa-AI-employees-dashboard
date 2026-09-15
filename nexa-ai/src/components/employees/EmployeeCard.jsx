import {
    EmailRounded,
    LocationOnRounded,
    ArrowForwardRounded,
    DeleteRounded,
} from "@mui/icons-material";

import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const avatarColors = [
    "#7C5CFC",
    "#0891B2",
    "#DB2777",
    "#059669",
    "#D97706",
];

export default function EmployeeCard({
    employee,
    index,
    onViewProfile,
    onDelete,
}) {
    const user = useSelector(
        (state) => state.auth.user
    );

    const isAdmin = user?.role === "admin";

    const avatarColor =
        avatarColors[index % avatarColors.length];

    const initials = employee.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const isActive = employee.status === "Active";

    const statusColor = isActive
        ? "#22C55E"
        : "#F59E0B";

    return (
        <MotionPaper
            layout
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
            }}
            whileHover={{
                y: -6,
            }}
            elevation={0}
            sx={{
                p: 2.5,
                height: "100%",
                borderRadius: 3,

                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",

                transition:
                    "border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",

                "&:hover": {
                    borderColor: "primary.main",
                    boxShadow:
                        "0 20px 45px rgba(124,92,252,0.12)",
                },
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                        minWidth: 0,
                    }}
                >
                    <Avatar
                        sx={{
                            width: 52,
                            height: 52,
                            flexShrink: 0,
                            fontWeight: 700,
                            backgroundColor: avatarColor,
                        }}
                    >
                        {initials}
                    </Avatar>

                    <Box
                        sx={{
                            minWidth: 0,
                        }}
                    >
                        <Typography
                            fontWeight={700}
                            sx={{
                                lineHeight: 1.3,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {employee.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mt: 0.3,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {employee.role}
                        </Typography>
                    </Box>
                </Stack>

                <Box
                    title={employee.status}
                    sx={{
                        width: 9,
                        height: 9,
                        flexShrink: 0,
                        borderRadius: "50%",
                        mt: 1,
                        backgroundColor: statusColor,
                        boxShadow: `0 0 10px ${statusColor}66`,
                    }}
                />
            </Stack>

            <Chip
                label={employee.department}
                size="small"
                sx={{
                    mt: 2.5,
                    color: "primary.main",
                    backgroundColor:
                        "rgba(124,92,252,0.10)",
                    border: "1px solid",
                    borderColor:
                        "rgba(124,92,252,0.14)",
                    fontWeight: 600,

                    "& .MuiChip-label": {
                        px: 1.2,
                    },
                }}
            />

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <Stack spacing={1.2}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{
                        minWidth: 0,
                    }}
                >
                    <EmailRounded
                        sx={{
                            fontSize: 17,
                            flexShrink: 0,
                            color: "text.secondary",
                        }}
                    />

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        noWrap
                        sx={{
                            minWidth: 0,
                        }}
                    >
                        {employee.email}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{
                        minWidth: 0,
                    }}
                >
                    <LocationOnRounded
                        sx={{
                            fontSize: 17,
                            flexShrink: 0,
                            color: "text.secondary",
                        }}
                    />

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        noWrap
                        sx={{
                            minWidth: 0,
                        }}
                    >
                        {employee.location}
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                spacing={1}
                sx={{
                    mt: 2.5,
                }}
            >
                <Button
                    fullWidth
                    variant="outlined"
                    endIcon={<ArrowForwardRounded />}
                    onClick={() =>
                        onViewProfile(employee)
                    }
                    sx={{
                        borderColor: "divider",
                        color: "text.primary",

                        "& .MuiButton-endIcon": {
                            transition:
                                "transform 0.25s ease",
                        },

                        "&:hover": {
                            borderColor:
                                "primary.main",
                            color: "primary.main",
                            backgroundColor:
                                "rgba(124,92,252,0.05)",

                            "& .MuiButton-endIcon": {
                                transform:
                                    "translateX(4px)",
                            },
                        },
                    }}
                >
                    View Profile
                </Button>

                {isAdmin && (
                    <Button
                        variant="outlined"
                        onClick={() =>
                            onDelete(employee)
                        }
                        sx={{
                            minWidth: 48,
                            borderColor: "divider",
                            color: "error.main",

                            "&:hover": {
                                borderColor:
                                    "error.main",
                                backgroundColor:
                                    "rgba(239,68,68,0.06)",
                            },
                        }}
                    >
                        <DeleteRounded />
                    </Button>
                )}
            </Stack>
        </MotionPaper>
    );
}