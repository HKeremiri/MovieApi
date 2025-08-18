import Hero from "../Components/Hero";
import MovieList from "../Components/MovieList";

import SearchMovie from "../Components/SearchMovie";
import { useState } from "react";
export default function MovieListPage() {
    const [movies, setMovies] = useState([]);
	return (
		<>
			<Hero
				title="Movie List"
				crumbs={[{ label: 'Home', href: '/' }, { label: 'Movie List' }]}
				backgroundImage="/images/uploads/slider-bg.jpg"
			/>
			<div className="page-single movie_list">
				<div className="container">
					<div className="row ipad-width2">
						<MovieList movies={movies} setMovies={setMovies}>

						</MovieList>
						<SearchMovie />

					</div>
				</div>
			</div>
		</>

	)
}