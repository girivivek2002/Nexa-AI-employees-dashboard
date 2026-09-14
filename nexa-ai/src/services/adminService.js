import api from "./api";

export const getAdminContacts = async () => {
    const response = await api.get("/admin/contacts");

    return response.data;
};

export const deleteAdminContact = async (id) => {
    const response = await api.delete(
        `/admin/contacts/${id}`
    );

    return response.data;
};

export const getAdminUsers = async () => {
    const response = await api.get("/admin/users");

    return response.data;
};

export const getAdminQuotes = async () => {
    const response = await api.get("/admin/quotes");

    return response.data;
};