// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    async function loadUser() {
        if (!token) return;
        setLoading(true);
        try {
            const res = await axios.get("/users/myprofile");
            setUser(res.data);
        } catch (err) {
            console.error("loadUser error", err);
            // token geçersizse temizle
            if (err.response?.status === 401) {
                logout();
            }
        } finally { setLoading(false); }
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

    return (
        <AuthContext.Provider value={{ token, user, loading, loginWithToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
