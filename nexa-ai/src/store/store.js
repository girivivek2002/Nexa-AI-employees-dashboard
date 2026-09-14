import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./slices/chatSlice";
import settingsReducer from "./slices/settingsSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer,
        settings: settingsReducer,
    },
});


store.subscribe(() => {
    const state = store.getState();


    const settings = state.settings;

    localStorage.setItem(
        "nexa-settings",
        JSON.stringify(settings)
    );


    const auth = state.auth;

    if (auth.token && auth.user) {
        localStorage.setItem(
            "token",
            auth.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(auth.user)
        );
    } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
});