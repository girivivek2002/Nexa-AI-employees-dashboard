import express from "express";

import {
    getChatHistory,
    saveChatMessage,
    clearChatHistory,
} from "../controllers/chatController.js";

const router = express.Router();

router.get("/", getChatHistory);

router.post("/", saveChatMessage);

router.delete("/", clearChatHistory);

export default router;