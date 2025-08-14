import React from 'react';
import { Link } from 'react-router-dom';
export default function MovieItem({ movie }) {
	
	const formattedDate = new Date(movie.releaseDate).toLocaleDateString();

	return (
		<div className="movie-item-style-2">
			<img src={movie.coverImageUrl || "images/uploads/default.jpg"} alt={movie.title} />
			<div className="mv-item-infor">
				<h6><Link to={`/moviedetail/${movie.movieId}`}>{movie.title} <span>({movie.createdYear})</span></Link></h6>
				<p className="rate"><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
				<p className="describe">{movie.description}</p>
				<p className="run-time">
					Run Time: {movie.ruration} .
					<span> MMPA: PG-13 </span> .
					<span>Release: {formattedDate}</span>
				</p>
				<p>Director: <a href="#">Yönemen Daha sonra</a></p>
				<p>Stars: Stars Daha sonra</p>
				{/*<p>Stars: {movie.actors?.map((actor, i) => (*/}
				{/*	<a key={i} href="#">{actor}{i < movie.actors.length - 1 ? ', ' : ''}</a>*/}
				{/*))}</p>*/}
			</div>
		</div>
	);
}
