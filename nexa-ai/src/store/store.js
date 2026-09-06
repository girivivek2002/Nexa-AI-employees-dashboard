import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./slices/chatSlice";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        settings: settingsReducer,
    },
});

store.subscribe(() => {
    const settings = store.getState().settings;

    localStorage.setItem(
        "nexa-settings",
        JSON.stringify(settings)
    );
});