import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function SignupPopup() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        surName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const response = await fetch("https://localhost:7088/api/Registers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    surName: formData.surName,
                    userName: formData.userName,
                    email: formData.email,
                    password: formData.password
                })
            });

            if (!response.ok) {
                const txt = await response.text().catch(() => "");
                throw new Error(txt || "Registration failed");
            }

            setSuccess(true);
            setFormData({
                name: "",
                surName: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="login-wrapper"
            id="signup-content"
            style={{ display: user ? "none" : undefined }}
        >
            <div className="login-content">
                <a href="#" className="close">x</a>
                <h3>Sign Up</h3>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>Registration successful!</p>}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label>
                            Name:
                            <input type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Surname:
                            <input type="text"
                                name="surName"
                                value={formData.surName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Username:
                            <input type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Email:
                            <input type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Password:
                            <input type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Confirm Password:
                            <input type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="row">
                        <button type="submit" disabled={loading}>
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
