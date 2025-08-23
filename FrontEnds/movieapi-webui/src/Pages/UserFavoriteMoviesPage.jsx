import Hero from "../Components/Hero";
import UserProfileAccountDetails from "../Components/UserProfileAccountDetails";
import { useAuth } from "../Contexts/AuthContext";
import MovieItemGrid from "../Components/MovieItemGrid";
import Pagination from "../Components/Pagination";
export default function UserFavoriteMoviesPage() {
    const { user, loading } = useAuth();
    //const [sortOption, setSortOption] = useState("popularity_desc");
    //const [currentPage, setCurrentPage] = useState(1);
    //const [moviesPerPage, setMoviesPerPage] = useState(5);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Please login</div>;
    return (
        <>
            <Hero
                title="My Favorite Movies"
                crumbs={[{ label: 'Profile', href: '/' }, { label: 'My Favorite Movies' }]}
                backgroundImage="/images/uploads/slider-bg.jpg"
            />

            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width2">
                        <UserProfileAccountDetails imgUrl={user.imgUrl} />
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="topbar-filter user">
                                <p>
                                    Found <span>1,608 movies</span> in total
                                </p>
                                <label>Sort by:</label>
                                <select>
                                    <option value="range">-- Choose option --</option>
                                    <option value="saab">-- Choose option 2--</option>
                                </select>
                                <a href="userfavoritelist.html" className="list">
                                    <i className="ion-ios-list-outline " />
                                </a>
                                <a href="userfavoritegrid.html" className="grid">
                                    <i className="ion-grid active" />
                                </a>
                            </div>
                            <div className="flex-wrap-movielist grid-fav">
                                <MovieItemGrid />
                            </div>
                            <div className="topbar-filter">
                                <label>Movies per page:</label>
                                <select>
                                    <option value="range">20 Movies</option>
                                    <option value="saab">10 Movies</option>
                                </select>
                               {/* <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}