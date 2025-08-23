import { Link } from "react-router-dom"; 
export default function MovieItemGrid({ movie }) {
    if (!movie) return <>There is no favorite movie</>

    return (
        <div className="movie-item-style-2 movie-item-style-1 style-3">
            <img src={movie.coverImageUrl || "images/uploads/default.jpg"} alt={movie.title} />
            <div className="hvr-inner">
                <Link to={`/moviedetail/${movie.movieId}`}>
                    {" "}
                    Read more <i className="ion-android-arrow-dropright" />{" "}
                </Link>
            </div>
            <div className="mv-item-infor">
                <h6>
                    <Link to={`/moviedetail/${movie.movieId}`}>{movie.title}</Link>
                </h6>
                <p className="rate">
                    <i className="ion-android-star" />
                    <span>{movie.rating}</span> /10
                </p>
            </div>
        </div>
    )
}