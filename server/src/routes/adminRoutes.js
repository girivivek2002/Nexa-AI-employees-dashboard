import express from "express";

import {
    getContacts,
    deleteContact,
    getUsers,
    getQuotes,
} from "../controllers/adminController.js";

import {
    protect,
    requireAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();



router.get(
    "/contacts",
    protect,
    requireAdmin,
    getContacts
);

router.delete(
    "/contacts/:id",
    protect,
    requireAdmin,
    deleteContact
);

router.get(
    "/users",
    protect,
    requireAdmin,
    getUsers
);

router.get(
    "/quotes",
    protect,
    requireAdmin,
    getQuotes
);

export default router;