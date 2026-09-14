import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
    addMessage,
    clearMessages,
    setTyping,
} from "../store/slices/chatSlice";

import { askAI } from "../services/aiService";

import AssistantHeader from "../components/assistant/AssistantHeader";
import ChatContainer from "../components/assistant/ChatContainer";
import SuggestedPrompts from "../components/assistant/SuggestedPrompts";
import ChatInput from "../components/assistant/ChatInput";

export default function Assistant() {
    const dispatch = useDispatch();

    const {
        messages,
        isTyping,
    } = useSelector(
        (state) => state.chat
    );

    const handleSend = async (text) => {
        const userMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
        };

        // Add user message
        // chatSlice will automatically save it to localStorage
        dispatch(addMessage(userMessage));

        dispatch(setTyping(true));

        try {
            // Send only the message to AI
            // Nothing is saved to MongoDB
            const response = await askAI(text);

            const assistantMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
            };

            // Add AI response
            // chatSlice will automatically save it to localStorage
            dispatch(addMessage(assistantMessage));

        } catch (error) {
            console.error(
                "AI request failed:",
                error
            );

            dispatch(
                addMessage({
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content:
                        error?.response?.data?.message ||
                        "Something went wrong. Please try again.",
                })
            );
        } finally {
            dispatch(setTyping(false));
        }
    };

    const handleClear = () => {
        // Clears Redux + removes chat from localStorage
        dispatch(clearMessages());
    };

    return (
        <Box
            sx={{
                height: {
                    xs: "calc(100vh - 120px)",
                    md: "calc(100vh - 130px)",
                },
                minHeight: 600,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <AssistantHeader
                onClear={handleClear}
            />

            <ChatContainer
                messages={messages}
                isTyping={isTyping}
            />

            {messages.length === 0 && (
                <SuggestedPrompts
                    onSelect={handleSend}
                />
            )}

            <ChatInput
                onSend={handleSend}
                disabled={isTyping}
            />
        </Box>
    );
}