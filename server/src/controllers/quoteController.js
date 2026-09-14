import Quote from "../models/Quote.js";

export const createQuote = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            serviceRequired,
            budget,
            message,
        } = req.body;

        // Required field validation
        if (
            !name ||
            !email ||
            !phone ||
            !serviceRequired ||
            !budget ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, email, phone, service, budget and message are required",
            });
        }

        // Email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address",
            });
        }

        // Basic phone validation
        const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

        if (!phoneRegex.test(phone.trim())) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid phone number",
            });
        }

        // Create quote
        const quote = await Quote.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            phone: phone.trim(),
            serviceRequired: serviceRequired.trim(),
            budget: budget.trim(),
            message: message.trim(),
        });

        return res.status(201).json({
            success: true,
            message:
                "Your quote request has been submitted successfully",
            quote: {
                id: quote._id,
                name: quote.name,
                email: quote.email,
                phone: quote.phone,
                serviceRequired: quote.serviceRequired,
                budget: quote.budget,
                message: quote.message,
                createdAt: quote.createdAt,
            },
        });
    } catch (error) {
        console.error("Quote request error:", error);

        return res.status(500).json({
            success: false,
            message:
                "Something went wrong while submitting your quote request",
        });
    }
};