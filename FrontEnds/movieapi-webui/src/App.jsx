import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import MovieDetailPage from './Pages/MovieDetailPage';
import MovieListPage from './Pages/MovieListPage';
import NotFoundPage from './Pages/NotFoundPage';
import CelebrityListPage from './Pages/CelebrityListPage';
import NewsListingPage from './Pages/NewsListingPage';
import NewsDetailPage from './Pages/NewsDetailPage';
import UserProfilePage from './Pages/UserProfilePage';
import UserFavoriteMoviesPage from './Pages/UserFavoriteMoviesPage';
function App() {


    return (
       
        <Router>
         
            <Routes>
                {/* Layout ile sarmalanan sayfalar */}
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/moviedetail/:id" element={<MovieDetailPage />} />
                    <Route path="/movielist" element={<MovieListPage />} />
                    <Route path="/celebrities" element={<CelebrityListPage />} />
                    <Route path="/news" element={<NewsListingPage />} />
                    <Route path="/newsdetail" element={<NewsDetailPage />} />
                    <Route path="/myprofile" element={<UserProfilePage />} />
                    <Route path="/myfavoritemovies" element={<UserFavoriteMoviesPage />} />
                </Route>

                {/* Layout olmadan sayfa */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Router>
       
    );
}

export default App;
