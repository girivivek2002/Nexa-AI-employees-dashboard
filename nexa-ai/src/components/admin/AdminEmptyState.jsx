import {
    InboxOutlined,
} from "@mui/icons-material";

import {
    Box,
    Typography,
} from "@mui/material";

export default function AdminEmptyState({
    message,
}) {
    return (
        <Box
            sx={{
                minHeight: 300,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                px: 3,
                py: 6,

                textAlign: "center",
            }}
        >
            <Box
                sx={{
                    width: 64,
                    height: 64,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: "50%",

                    bgcolor:
                        "action.hover",

                    color:
                        "text.secondary",

                    mb: 2,
                }}
            >
                <InboxOutlined
                    sx={{
                        fontSize: 30,
                    }}
                />
            </Box>

            <Typography
                sx={{
                    fontWeight: 700,
                    mb: 0.5,
                }}
            >
                Nothing here yet
            </Typography>

            <Typography
                color="text.secondary"
                variant="body2"
            >
                {message}
            </Typography>
        </Box>
    );
}