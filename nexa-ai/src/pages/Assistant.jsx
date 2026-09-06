import { useEffect } from "react";

import { Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import {
    addMessage,
    setMessages,
    clearMessages,
    setTyping,
} from "../store/slices/chatSlice";

import { askAI } from "../services/aiService";

import {
    getChatHistory,
    saveChatMessage,
    clearChatHistory,
} from "../services/chatService";

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

    // Load chat history when Assistant opens
    useEffect(() => {
        const loadHistory = async () => {
            try {
                const history = await getChatHistory();

                const formattedMessages = history.map(
                    (message) => ({
                        id: message._id,
                        role: message.role,
                        content: message.content,
                    })
                );

                dispatch(setMessages(formattedMessages));
            } catch (error) {
                console.error(
                    "Failed to load chat history:",
                    error
                );
            }
        };

        loadHistory();
    }, [dispatch]);

    const handleSend = async (text) => {
        const userMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
        };

        // Show user message immediately
        dispatch(addMessage(userMessage));

        // Save user message to MongoDB
        try {
            await saveChatMessage(
                "user",
                text
            );
        } catch (error) {
            console.error(
                "Failed to save user message:",
                error
            );
        }

        dispatch(setTyping(true));

        try {
            const response = await askAI(text);

            const assistantMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
            };

            // Show AI response
            dispatch(
                addMessage(assistantMessage)
            );

            // Save AI response to MongoDB
            await saveChatMessage(
                "assistant",
                response
            );

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

    const handleClear = async () => {
        try {
            await clearChatHistory();

            dispatch(clearMessages());
        } catch (error) {
            console.error(
                "Failed to clear chat history:",
                error
            );
        }
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