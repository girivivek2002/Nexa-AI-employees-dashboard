import {
    Box,
    Drawer,
    IconButton,
    Typography,
} from "@mui/material";

import { CloseRounded } from "@mui/icons-material";

import { motion } from "framer-motion";

import EmployeeForm from "./EmployeeForm";

const MotionBox = motion(Box);

export default function AddEmployeeDrawer({
    open,
    onClose,
    onAddEmployee,
}) {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(5px)",
                    },
                },
            }}
        >
            <MotionBox
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                sx={{
                    width: {
                        xs: "100vw",
                        sm: 480,
                    },

                    height: "100%",

                    p: {
                        xs: 2.5,
                        sm: 3.5,
                    },

                    overflowY: "auto",

                    bgcolor: "background.paper",

                    borderLeft: "1px solid",
                    borderColor: "divider",

                    backgroundImage:
                        "radial-gradient(circle at top right, rgba(124,92,252,0.12), transparent 35%)",
                }}
            >
                {/* Header */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        mb: 3,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight={800}
                        >
                            Add Employee
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.5 }}
                        >
                            Add a new member to your workforce.
                        </Typography>
                    </Box>

                    <IconButton onClick={onClose}>
                        <CloseRounded />
                    </IconButton>
                </Box>

                <EmployeeForm
                    onSubmitEmployee={onAddEmployee}
                    onClose={onClose}
                />
            </MotionBox>
        </Drawer>
    );
}