import { SearchOffRounded } from "@mui/icons-material";

import {
    Box,
    Button,
    Paper,
    Typography,
} from "@mui/material";

export default function EmptyState({
    onClear,
}) {
    return (
        <Paper
            elevation={0}
            sx={{
                py: 8,
                px: 3,
                textAlign: "center",
                borderRadius: 3,
                background:
                    "rgba(255,255,255,0.025)",
                border:
                    "1px solid rgba(255,255,255,0.07)",
            }}
        >
            <Box
                sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "text.secondary",
                    background:
                        "rgba(255,255,255,0.05)",
                }}
            >
                <SearchOffRounded />
            </Box>

            <Typography
                variant="h6"
                fontWeight={700}
            >
                No employees found
            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    mt: 1,
                    mb: 3,
                }}
            >
                Try changing your search or department
                filter.
            </Typography>

            <Button
                variant="outlined"
                onClick={onClear}
            >
                Clear Filters
            </Button>
        </Paper>
    );
}