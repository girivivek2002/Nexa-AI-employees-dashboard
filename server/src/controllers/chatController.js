import ChatMessage from "../models/ChatMessage.js";

export const getChatHistory = async (req, res) => {
    try {
        const messages = await ChatMessage.find()
            .sort({ createdAt: 1 });

        res.json({
            success: true,
            messages,
        });
    } catch (error) {
        console.error("Get chat history error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to load chat history",
        });
    }
};

export const saveChatMessage = async (req, res) => {
    try {
        const { role, content } = req.body;

        if (!role || !content) {
            return res.status(400).json({
                success: false,
                message: "Role and content are required",
            });
        }

        const message = await ChatMessage.create({
            role,
            content,
        });

        res.status(201).json({
            success: true,
            message,
        });
    } catch (error) {
        console.error("Save chat message error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to save chat message",
        });
    }
};

export const clearChatHistory = async (req, res) => {
    try {
        await ChatMessage.deleteMany({});

        res.json({
            success: true,
            message: "Chat history cleared",
        });
    } catch (error) {
        console.error("Clear chat history error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to clear chat history",
        });
    }
};