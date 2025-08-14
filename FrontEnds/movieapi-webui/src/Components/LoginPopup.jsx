import { useState } from "react";

export default function LoginPopup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

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
                alert("Login failed. Please check your credentials.");
                return;
            }

            const data = await response.json();

            // Token'ý localStorage'a kaydet
            localStorage.setItem("token", data.token);

            alert("Login successful!");
            console.log("JWT Token:", data.token);

        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="login-wrapper" id="login-content">
            <div className="login-content">
                <a href="#" className="close">x</a>
                <h3>Login</h3>
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
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
