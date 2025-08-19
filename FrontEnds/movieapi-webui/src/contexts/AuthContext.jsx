// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import instance from "../api/axiosInstance";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    async function loadUser() {
        if (!token) return;
        setLoading(true);
        try {
            const res = await instance.get("/users/myprofile");
            setUser(res.data);
        } catch (err) {
            console.error("loadUser error", err);
            if (err.response?.status === 401) {
                logout();
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, [token]);

    function loginWithToken(newToken) {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    }

    function logout() {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    // **Yeni: user güncelleme fonksiyonu**
    async function updateUser(updatedData) {
        if (!user) return;

        try {
            const payload = { userId: user.userId, ...updatedData };
            const res = await instance.put("/Users", payload);

            if (res.status === 200) {
                // user state'ini güncelle
                setUser(payload);
                return { success: true };
            } else {
                return { success: false, message: res.data?.message || "Unknown error" };
            }
        } catch (err) {
            console.error("updateUser error", err);
            return { success: false, message: err.response?.data?.message || err.message };
        }
    }

    return (
        <AuthContext.Provider value={{ token, user, loading, loginWithToken, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
