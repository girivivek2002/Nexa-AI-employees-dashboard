import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true, maxlength: 80 },
        email: { type: String, required: true, trim: true, lowercase: true },
        phone: { type: String, required: true, trim: true, maxlength: 30 },
        serviceRequired: { type: String, required: true, trim: true, maxlength: 120 },
        budget: { type: String, required: true, trim: true, maxlength: 80 },
        message: { type: String, required: true, trim: true, maxlength: 2000 },
    },
    { timestamps: true }
);

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
