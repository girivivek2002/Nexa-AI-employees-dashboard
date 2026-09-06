import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/ai`



export const askAI = async (message) => {
    const response = await axios.post(
        `${API_URL}/chat`,
        {
            message,
        }
    );

    return response.data.response;
};