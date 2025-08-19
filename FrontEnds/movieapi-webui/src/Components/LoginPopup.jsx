// src/Components/LoginPopup.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPopup() {
    const { user, loginWithToken } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hideImmediate, setHideImmediate] = useState(false); // login sonras� an�nda gizlemek i�in

    // overlay'i g�venli �ekilde kapatan yard�mc� fonksiyon
    const hideOverlay = () => {
        try {
            const overlay = document.querySelector('.overlay.openform') || document.querySelector('.overlay');
            if (overlay) {
                overlay.classList.remove('openform');
                overlay.style.display = 'none';
            }
            const loginEl = document.getElementById('login-content');
            if (loginEl) loginEl.style.display = 'none';
        } catch (err) {
            console.warn('hideOverlay error', err);
        }
    };

    // overlay'i a�an helper (eski script �al��mazsa fallback ile biz a�ar�z)
    const openOverlay = () => {
        try {
            const overlay = document.querySelector('.overlay');
            const loginEl = document.getElementById('login-content');

            if (overlay) {
                overlay.classList.add('openform');
                overlay.style.display = '';
            }

            if (loginEl) {
                // e�er overlay yoksa yine popup'� g�ster
                loginEl.style.display = '';
            }
        } catch (err) {
            console.warn('openOverlay error', err);
        }
    };

    // user y�klendi�inde veya hideImmediate true oldu�unda overlay'i kapat
    useEffect(() => {
        if (user || hideImmediate) {
            hideOverlay();
            if (hideImmediate) setHideImmediate(false);
        }
    }, [user, hideImmediate]);

    // header'daki .loginLink t�klamalar�n� yakala ve a�
    useEffect(() => {
        const onDocClick = (e) => {
            // E�er user zaten login ise popup g�r�nmemeli
            if (user) return;

            const target = e.target;
            if (target && target.closest && target.closest('.loginLink')) {
                e.preventDefault();
                // �nce mevcut eski script'in davran���n� bozmayacak �ekilde
                // overlay'i kendimiz a� (fallback)
                openOverlay();
            }
        };

        // close link i�in click yakalama (popup i�inde kapatma)
        const onCloseClick = (e) => {
            const target = e.target;
            if (target && target.closest && target.closest('.close')) {
                e.preventDefault();
                hideOverlay();
            }
        };

        document.addEventListener('click', onDocClick);
        document.addEventListener('click', onCloseClick);

        return () => {
            document.removeEventListener('click', onDocClick);
            document.removeEventListener('click', onCloseClick);
        };
    }, [user]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await fetch("https://localhost:7088/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                const txt = await response.text().catch(() => "");
                throw new Error(txt || "Login failed. Please check your credentials.");
            }

            const data = await response.json();
            const token = data.token ?? data?.accessToken ?? null;
            if (!token) throw new Error("Token not returned from server.");

            // AuthProvider i�indeki loginWithToken token'� localStorage + state'e koyar
            loginWithToken(token);

            // popup'� an�nda gizle (AuthProvider loadUser async oldu�u i�in)
            setHideImmediate(true);

            // overlay'i de kapat (ek g�venlik)
            hideOverlay();

            console.log("JWT Token:", token);
        } catch (err) {
            console.error("Login error:", err);
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // E�er user varsa veya hemen gizleme gerekiyorsa tamamen g�r�nmez yap
    const shouldHide = Boolean(user) || hideImmediate;

    return (
        <div
            className="login-wrapper"
            id="login-content"
            style={{ display: shouldHide ? "none" : undefined }}
        >
            <div className="login-content">
                <a href="#" className="close">x</a>
                <h3>Login</h3>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="row">
                        <label htmlFor="email">
                            Email:
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                            />
                        </label>
                    </div>

                    <div className="row">
                        <label htmlFor="password">
                            Password:
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="******"
                                required
                            />
                        </label>
                    </div>

                    <div className="row">
                        <div className="remember">
                            <div>
                                <input type="checkbox" name="remember" />
                                <span>Remember me</span>
                            </div>
                            <a href="#">Forget password?</a>
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
