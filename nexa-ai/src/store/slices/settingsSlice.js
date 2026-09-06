import { createSlice } from "@reduxjs/toolkit";

const savedSettings = localStorage.getItem("nexa-settings");

const defaultSettings = {
    profile: {
        fullName: "Alex Kumar",
        email: "alex@nexa.ai",
        position: "Software Engineer",
        department: "Engineering",
    },

    themeMode: "dark",

    notifications: {
        email: true,
        aiInsights: true,
        employeeUpdates: false,
        weeklyReport: true,
    },
};

const initialState = savedSettings
    ? JSON.parse(savedSettings)
    : defaultSettings;

const settingsSlice = createSlice({
    name: "settings",

    initialState,

    reducers: {
        updateProfile: (state, action) => {
            state.profile = {
                ...state.profile,
                ...action.payload,
            };
        },

        setThemeMode: (state, action) => {
            state.themeMode = action.payload;
        },

        setNotification: (state, action) => {
            const { key, value } = action.payload;

            state.notifications[key] = value;
        },

        resetSettings: () => defaultSettings,
    },
});

export const {
    updateProfile,
    setThemeMode,
    setNotification,
    resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;