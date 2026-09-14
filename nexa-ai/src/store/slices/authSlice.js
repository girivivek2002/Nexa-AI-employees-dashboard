import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("token");
const savedUser = localStorage.getItem("user");

let parsedUser = null;

try {
    parsedUser = savedUser
        ? JSON.parse(savedUser)
        : null;
} catch (error) {
    console.error(
        "Failed to parse saved user:",
        error
    );

    localStorage.removeItem("user");
}

const initialState = {
    token: savedToken || null,
    user: parsedUser,
    isAuthenticated: Boolean(
        savedToken && parsedUser
    ),
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        setCredentials: (state, action) => {
            const { token, user } = action.payload;

            state.token = token;
            state.user = user;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
        },

        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },
    },
});

export const {
    setCredentials,
    logout,
    updateUser,
} = authSlice.actions;

export default authSlice.reducer;