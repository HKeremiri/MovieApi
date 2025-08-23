import React, { useState, useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";

export default function UserProfileChangePassword() {
    const { user, changePassword } = useAuth();
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            });
        }
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            alert("New passwords do not match!");
            return;
        }
        const result = await changePassword({
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword
        });
        if (result.success) {
            alert("Password changed successfully!");
        } else {
            alert("Change failed: " + result.message);
        }
    }
    return (
        <form className="password" onSubmit={handleSubmit} >
            <h4>02. Change password</h4>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>Old Password</label>
                    <input
                        type="password"
                        name="oldPassword"
                        placeholder="**********"
                        value={formData.oldPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="***************"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-it">
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmNewPassword"
                        placeholder="***************"
                        value={formData.confirmNewPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <input
                        className="submit"
                        type="submit"
                        defaultValue="change"
                    />
                </div>
            </div>
        </form>
    );

}