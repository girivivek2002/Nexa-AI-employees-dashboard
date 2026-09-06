import { Box } from "@mui/material";

import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsSection from "../components/settings/SettingsSection";
import ProfileForm from "../components/settings/ProfileForm";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import NotificationSettings from "../components/settings/NotificationSettings";

export default function Settings() {
    return (
        <Box sx={{ maxWidth: 1000, mx: "auto" }}>
            <SettingsHeader />

            <SettingsSection
                title="Profile"
                description="Manage your personal information."
            >
                <ProfileForm />
            </SettingsSection>

            <SettingsSection
                title="Appearance"
                description="Customize how NEXA AI looks."
            >
                <AppearanceSettings />
            </SettingsSection>

            <SettingsSection
                title="Notifications"
                description="Choose which notifications you want to receive."
            >
                <NotificationSettings />
            </SettingsSection>
        </Box>
    );
}