import { generateAIResponse } from "../services/aiService.js";

export const chatWithAI = async (req, res) => {
    try {
        const { message } = req.body || {};

        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                message: "Message is required",
            });
        }

        const response = await generateAIResponse(
            message.trim()
        );

        res.json({
            success: true,
            response,
        });
    } catch (error) {
        console.error("Gemini AI Error:", error);

        res.status(500).json({
            success: false,
            message:
                error.message ||
                "Failed to generate AI response",
        });
    }
};