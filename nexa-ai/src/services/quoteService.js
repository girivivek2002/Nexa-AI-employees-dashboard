import api from "./api";

export const submitQuote = async (quoteData) => {
    const response = await api.post(
        "/quote",
        quoteData
    );

    return response.data;
};