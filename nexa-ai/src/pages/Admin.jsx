import { useEffect, useState } from "react";

import {
    Box,
    CircularProgress,
} from "@mui/material";

import { toast } from "react-toastify";

import {
    getAdminContacts,
    deleteAdminContact,
    getAdminUsers,
    getAdminQuotes,
} from "../services/adminService";

import AdminHeader from "../components/admin/AdminHeader";
import AdminStats from "../components/admin/AdminStats";
import AdminTabs from "../components/admin/AdminTabs";

export default function Admin() {
    const [tab, setTab] = useState(0);

    const [contacts, setContacts] = useState([]);
    const [users, setUsers] = useState([]);
    const [quotes, setQuotes] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadAdminData = async () => {
        try {
            setLoading(true);

            const [
                contactsResponse,
                usersResponse,
                quotesResponse,
            ] = await Promise.all([
                getAdminContacts(),
                getAdminUsers(),
                getAdminQuotes(),
            ]);

            setContacts(
                contactsResponse.contacts || []
            );

            setUsers(
                usersResponse.users || []
            );

            setQuotes(
                quotesResponse.quotes || []
            );
        } catch (error) {
            console.error(
                "Admin data error:",
                error
            );

            const message =
                error?.response?.data?.message ||
                "Unable to load admin data.";

            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAdminData();
    }, []);

    const handleDeleteContact = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this contact?"
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteAdminContact(id);

            setContacts((prev) =>
                prev.filter(
                    (contact) =>
                        contact._id !== id
                )
            );

            toast.success(
                "Contact deleted successfully"
            );
        } catch (error) {
            console.error(
                "Delete contact error:",
                error
            );

            toast.error(
                error?.response?.data?.message ||
                "Unable to delete contact."
            );
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 1600,
                mx: "auto",

                px: {
                    xs: 0,
                    sm: 1,
                    md: 2,
                },

                pb: 4,
            }}
        >
            <AdminHeader />

            <AdminStats
                users={users.length}
                contacts={contacts.length}
                quotes={quotes.length}
                loading={loading}
            />

            {loading ? (
                <Box
                    sx={{
                        minHeight: 360,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CircularProgress
                        size={42}
                        thickness={4}
                    />
                </Box>
            ) : (
                <AdminTabs
                    tab={tab}
                    setTab={setTab}
                    contacts={contacts}
                    users={users}
                    quotes={quotes}
                    onDeleteContact={
                        handleDeleteContact
                    }
                />
            )}
        </Box>
    );
}