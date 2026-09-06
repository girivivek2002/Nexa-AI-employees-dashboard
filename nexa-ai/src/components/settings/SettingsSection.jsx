import { Box, Card, Typography } from "@mui/material";

export default function SettingsSection({
    title,
    description,
    children,
}) {
    return (
        <Card
            sx={{
                mb: 2.5,
                p: { xs: 2, sm: 3 },
                background:
                    "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                backdropFilter: "blur(12px)",
            }}
        >
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={700}>
                    {title}
                </Typography>

                {description && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        {description}
                    </Typography>
                )}
            </Box>

            {children}
        </Card>
    );
}