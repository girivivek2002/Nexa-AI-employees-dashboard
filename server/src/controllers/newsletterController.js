import Newsletter from "../models/Newsletter.js";

export const subscribe = async (req, res) => {
    try {
        const { email } = req.body;

        // Required field validation
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const normalizedEmail = email
            .toLowerCase()
            .trim();

        // Email format validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address",
            });
        }

        // Check existing subscription
        const existingSubscription =
            await Newsletter.findOne({
                email: normalizedEmail,
            });

        if (existingSubscription) {
            return res.status(409).json({
                success: false,
                message: "You are already subscribed",
            });
        }

        // Create subscription
        const subscription = await Newsletter.create({
            email: normalizedEmail,
        });

        return res.status(201).json({
            success: true,
            message: "Successfully subscribed to the newsletter",
            subscription: {
                id: subscription._id,
                email: subscription.email,
                subscribedAt: subscription.subscribedAt,
            },
        });
    } catch (error) {
        console.error(
            "Newsletter subscription error:",
            error
        );

        // Handle duplicate MongoDB index error
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "You are already subscribed",
            });
        }

        return res.status(500).json({
            success: false,
            message:
                "Something went wrong while subscribing",
        });
    }
};