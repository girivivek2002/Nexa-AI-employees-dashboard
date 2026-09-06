import axios from "axios";

const API_URL = "http://localhost:5000/api/chat";

export const getChatHistory = async () => {
    const response = await axios.get(API_URL);

    return response.data.messages;
};

export const saveChatMessage = async (role, content) => {
    const response = await axios.post(API_URL, {
        role,
        content,
    });

    return response.data.message;
};

export const clearChatHistory = async () => {
    await axios.delete(API_URL);
};