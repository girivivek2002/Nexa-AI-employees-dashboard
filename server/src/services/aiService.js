import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

import Employee from "../models/Employee.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../../.env"),
});

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const generateAIResponse = async (message) => {
    try {
        const employees = await Employee.find()
            .select("-__v")
            .lean();

        const employeeContext = JSON.stringify(
            employees,
            null,
            2
        );

        const systemPrompt = `
You are NEXA AI, an intelligent and helpful AI assistant for an organization.

You are a general-purpose AI assistant. Answer:
- General questions
- Technical questions
- Programming questions
- Educational questions
- Career questions
- General knowledge questions
- Company and employee questions

Use the employee data below ONLY when the user's question is related
to the organization or workforce.

Rules:
- Never invent company or employee information.
- Use the provided employee data for company-related questions.
- Calculate counts and percentages from the provided data.
- If historical information is unavailable, clearly say so.
- Answer general questions using your general knowledge.
- Keep responses clear, professional and helpful.
- Use bullet points when useful.
- Provide code blocks when code is requested.

CURRENT EMPLOYEE DATA:

${employeeContext}
`;

        const maxRetries = 3;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await ai.models.generateContent({
                    model: "gemini-3.5-flash-lite",
                    contents: `${systemPrompt}

USER QUESTION:
${message}`,
                });

                return response.text;

            } catch (error) {
                console.error(
                    `Gemini attempt ${attempt} failed:`,
                    error.message
                );
                const isQuotaError =
                    error?.status === 429 ||
                    error?.code === 429 ||
                    error?.message?.includes("RESOURCE_EXHAUSTED") ||
                    error?.message?.includes("quota exceeded");

                if (isQuotaError) {
                    throw new Error(
                        "NEXA AI has reached its Gemini API usage limit. Please try again later."
                    );
                }

                const isTemporaryError =
                    error?.status === 503 ||
                    error?.code === 503 ||
                    error?.message?.includes("high demand") ||
                    error?.message?.includes("UNAVAILABLE");

                if (!isTemporaryError || attempt === maxRetries) {
                    throw error;
                }

                // Wait before retrying
                await new Promise((resolve) =>
                    setTimeout(resolve, attempt * 1500)
                );
            }
        }

    } catch (error) {
        console.error("AI Service Error:", error);
        throw error;
    }
};