// AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import UserProfilePage from "./Pages/UserProfilePage";
import MovieListPage from "./Pages/MovieListPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/moviedetail" element={<MovieDetailPage />} />
                <Route path="/myprofile" element={<UserProfilePage />} />
                <Route path="/movielist" element={<MovieListPage />} />
            </Routes>
        </BrowserRouter>
    );
}
