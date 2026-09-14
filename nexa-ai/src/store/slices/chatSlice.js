import { createSlice } from "@reduxjs/toolkit";

const getStorageKey = () => {
    try {
        const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (user?.id) {
            return `nexa-chat-user-${user.id}`;
        }
    } catch (error) {
        console.error(
            "Unable to read logged-in user:",
            error
        );
    }

    return "nexa-chat-guest";
};

const loadMessages = () => {
    try {
        const key = getStorageKey();
        const saved = localStorage.getItem(key);

        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error(
            "Unable to load chat messages:",
            error
        );

        return [];
    }
};

const saveMessages = (messages) => {
    try {
        const key = getStorageKey();

        localStorage.setItem(
            key,
            JSON.stringify(messages)
        );
    } catch (error) {
        console.error(
            "Unable to save chat messages:",
            error
        );
    }
};

const clearStoredMessages = () => {
    try {
        const key = getStorageKey();

        localStorage.removeItem(key);
    } catch (error) {
        console.error(
            "Unable to remove chat messages:",
            error
        );
    }
};

const initialState = {
    messages: loadMessages(),
    isTyping: false,
};

const chatSlice = createSlice({
    name: "chat",

    initialState,

    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);

            saveMessages(state.messages);
        },

        setMessages: (state, action) => {
            state.messages = action.payload;

            saveMessages(state.messages);
        },

        clearMessages: (state) => {
            state.messages = [];

            clearStoredMessages();
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