import { AddRounded, GroupsRounded } from "@mui/icons-material";
import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MotionBox = motion(Box);

export default function EmployeeHeader({
    count,
    onAddEmployee,
}) {
    const user = useSelector((state) => state.auth.user);
    const isAdmin = user?.role === "admin";

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ mb: 3 }}
        >
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={2}
            >
                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            display: "grid",
                            placeItems: "center",
                            color: "primary.main",
                            background: "rgba(124,92,252,0.12)",
                        }}
                    >
                        <GroupsRounded />
                    </Box>

                    <Box>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
                            <Typography
                                variant="h4"
                                fontWeight={800}
                            >
                                Employees
                            </Typography>

                            <Chip
                                label={count}
                                size="small"
                                sx={{
                                    color: "#C4B5FD",
                                    background: "rgba(124,92,252,0.12)",
                                }}
                            />
                        </Stack>

                        <Typography
                            color="text.secondary"
                            sx={{ mt: 0.4 }}
                        >
                            Search and explore your workforce.
                        </Typography>
                    </Box>
                </Stack>

                {isAdmin && (
                    <Button
                        variant="contained"
                        startIcon={<AddRounded />}
                        onClick={onAddEmployee}
                        sx={{
                            minWidth: { xs: "100%", sm: "auto" },
                            px: 2.5,
                            boxShadow:
                                "0 8px 25px rgba(124,92,252,0.25)",
                        }}
                    >
                        Add Employee
                    </Button>
                )}
            </Stack>
        </MotionBox>
    );
}