import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            subject,
            message,
        } = req.body;

        // Required field validation
        if (
            !name ||
            !email ||
            !phone ||
            !subject ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, email, phone, subject and message are required",
            });
        }

        // Basic email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address",
            });
        }

        // Create contact submission
        const contact = await Contact.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            phone: phone.trim(),
            subject: subject.trim(),
            message: message.trim(),
        });

        return res.status(201).json({
            success: true,
            message:
                "Your message has been submitted successfully",
            contact: {
                id: contact._id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                subject: contact.subject,
                message: contact.message,
                createdAt: contact.createdAt,
            },
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return res.status(500).json({
            success: false,
            message:
                "Something went wrong while submitting your message",
        });
    }
};