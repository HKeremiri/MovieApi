
import axios from "../../../../node_modules/axios/index";

const instance = axios.create({
    baseURL: "https://localhost:7088/api",
    headers: { "Content-Type": "application/json" }
});

// Her istekte token ekle
instance.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => Promise.reject(error));

export default instance;
