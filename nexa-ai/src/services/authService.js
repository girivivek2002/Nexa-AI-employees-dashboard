import api from "./api";

export const registerUser = async (userData) => {
    const response = await api.post(
        "/auth/register",
        userData
    );

    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await api.post(
        "/auth/login",
        credentials
    );

    return response.data;
};

export const getProfile = async () => {
    const response = await api.get(
        "/auth/profile"
    );

    return response.data;
};

export const updateProfile = async (profileData) => {
    return (
        await api.put("/auth/profile", profileData)
    ).data;
};

export const changePassword = async (passwordData) => {
    return (
        await api.put(
            "/auth/change-password",
            passwordData
        )
    ).data;
};