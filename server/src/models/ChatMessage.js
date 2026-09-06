import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            enum: ["user", "assistant"],
            required: true,
        },

        content: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const ChatMessage = mongoose.model(
    "ChatMessage",
    chatMessageSchema
);

export default ChatMessage;