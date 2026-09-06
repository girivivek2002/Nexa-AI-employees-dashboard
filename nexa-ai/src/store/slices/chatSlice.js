import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    isTyping: false,
};

const chatSlice = createSlice({
    name: "chat",

    initialState,

    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },

        setMessages: (state, action) => {
            state.messages = action.payload;
        },

        clearMessages: (state) => {
            state.messages = [];
        },

        setTyping: (state, action) => {
            state.isTyping = action.payload;
        },
    },
});

export const {
    addMessage,
    setMessages,
    clearMessages,
    setTyping,
} = chatSlice.actions;

export default chatSlice.reducer;