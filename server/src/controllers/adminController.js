import Contact from "../models/Contact.js";
import User from "../models/User.js";
import Quote from "../models/Quote.js";


export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: contacts.length,
            contacts,
        });
    } catch (error) {
        console.error("Get contacts error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch contact submissions",
        });
    }
};


export const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const contact = await Contact.findById(id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact submission not found",
            });
        }

        await Contact.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Contact submission deleted successfully",
        });
    } catch (error) {
        console.error("Delete contact error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to delete contact submission",
        });
    }
};


export const getUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password").sort({ createdAt: -1 });


        return res.status(200).json({
            success: true,
            count: users.length,
            users,
        });
    } catch (error) {
        console.error("Get users error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch users",
        });
    }
};

export const getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: quotes.length,
            quotes,
        });
    } catch (error) {
        console.error("Get quotes error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch quote requests",
        });
    }
};