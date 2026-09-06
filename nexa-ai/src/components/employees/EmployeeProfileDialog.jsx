import {
    CloseRounded,
    EmailRounded,
    LocationOnRounded,
    WorkOutlineRounded,
} from "@mui/icons-material";

import {
    Avatar,
    Box,
    Chip,
    Dialog,
    DialogContent,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

export default function EmployeeProfileDialog({
    employee,
    open,
    onClose,
}) {
    if (!employee) {
        return null;
    }

    const initials = employee.name
        .split(" ")
        .map((name) => name[0])
        .join("");

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    background: "#101522",
                    border:
                        "1px solid rgba(255,255,255,0.08)",
                },
            }}
        >
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 12,
                    top: 12,
                    color: "text.secondary",
                }}
            >
                <CloseRounded />
            </IconButton>

            <DialogContent sx={{ p: 4 }}>
                <Stack
                    alignItems="center"
                    textAlign="center"
                >
                    <Avatar
                        sx={{
                            width: 90,
                            height: 90,
                            fontSize: 28,
                            fontWeight: 700,
                            background:
                                "linear-gradient(135deg, #7C5CFC, #22D3EE)",
                            mb: 2,
                        }}
                    >
                        {initials}
                    </Avatar>

                    <Typography
                        variant="h5"
                        fontWeight={800}
                    >
                        {employee.name}
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        {employee.role}
                    </Typography>

                    <Chip
                        label={employee.department}
                        sx={{
                            mt: 2,
                            color: "#C4B5FD",
                            background:
                                "rgba(124,92,252,0.12)",
                        }}
                    />
                </Stack>

                <Stack spacing={2.5} sx={{ mt: 4 }}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <EmailRounded color="primary" />

                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Email
                            </Typography>

                            <Typography>
                                {employee.email}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <LocationOnRounded color="primary" />

                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Location
                            </Typography>

                            <Typography>
                                {employee.location}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <WorkOutlineRounded color="primary" />

                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Experience
                            </Typography>

                            <Typography>
                                {employee.experience}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>

                <Box sx={{ mt: 4 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{ mb: 1.5 }}
                    >
                        Skills
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                    >
                        {employee.skills.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                size="small"
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Box>
            </DialogContent>
        </Dialog>
    );
}