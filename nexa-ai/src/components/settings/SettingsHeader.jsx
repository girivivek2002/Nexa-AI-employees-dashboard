import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function SettingsHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight={800}>
                    Settings
                </Typography>

                <Typography color="text.secondary" sx={{ mt: 0.7 }}>
                    Manage your profile, appearance, and notification preferences.
                </Typography>
            </Box>
        </motion.div>
    );
}