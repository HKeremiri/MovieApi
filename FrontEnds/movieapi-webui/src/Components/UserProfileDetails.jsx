import React, { useState, useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";

export default function UserProfileDetails() {
    const { user, updateUser } = useAuth();
    const [formData, setFormData] = useState({
        userName: "",
        name: "",
        surName: "",
        email: "",
        imgUrl: ""
    });

    // user deðiþtiðinde formu güncelle
    useEffect(() => {
        if (user) {
            setFormData({
                userName: user.userName || "",
                name: user.name || "",
                surName: user.surName || "",
                email: user.email || "",
                imgUrl: user.imgUrl || ""
            });
        }
    }, [user]);

    if (!user) return <p>Loading...</p>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await updateUser(formData);
        if (result.success) {
            alert("User updated successfully!");
        } else {
            alert("Update failed: " + result.message);
        }
    };

    return (
        <form className="user" onSubmit={handleSubmit}>
            <h4>01. Profile details</h4>

            <div className="row">
                <div className="col-md-6 form-it">
                    <label>User Name</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 form-it">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 form-it">
                    <label>SurName</label>
                    <input
                        type="text"
                        name="surName"
                        value={formData.surName}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 form-it">
                    <label>Email Address</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6 form-it">
                    <label>Image Url</label>
                    <input
                        type="text"
                        name="imgUrl"
                        value={formData.imgUrl}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <input className="submit" type="submit" value="Save" />
                </div>
            </div>
        </form>
    );
}
