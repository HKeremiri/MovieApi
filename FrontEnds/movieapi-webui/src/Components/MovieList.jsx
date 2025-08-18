import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import Pagination from './Pagination';
export default function MovieList({ movies, setMovies }) {
	
	const [sortOption, setSortOption] = useState("popularity_desc");
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage, setMoviesPerPage] = useState(5);

	// Film listesini çek
	useEffect(() => {
		fetch('https://localhost:7088/api/Movies/MovieList')
			.then(response => response.json())
			.then(data => setMovies(data))
			.catch(error => console.error("Veri çekme hatasý:", error));
	}, []);

	// Sýralama iþlemi
	const sortedMovies = [...movies].sort((a, b) => {
		switch (sortOption) {
			case 'popularity_asc':
				return a.popularity - b.popularity;
			case 'popularity_desc':
				return b.popularity - a.popularity;
			case 'rating_asc':
				return a.rating - b.rating;
			case 'rating_desc':
				return b.rating - a.rating;
			case 'date_asc':
				return new Date(a.createdYear) - new Date(b.createdYear);
			case 'date_desc':
				return new Date(b.createdYear) - new Date(a.createdYear);
			default:
				return 0;
		}
	});

	// Sayfalama iþlemi
	const indexOfLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);
	const totalPages = Math.ceil(movies.length / moviesPerPage);

	// JSX
	return (
		<div className="col-md-8 col-sm-12 col-xs-12">
			<div className="topbar-filter">
				<p>Found <span>{movies.length} movies</span> in total</p>
				<label>Sort by:</label>
				<select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
					<option value="popularity_desc">Popularity Descending</option>
					<option value="popularity_asc">Popularity Ascending</option>
					<option value="rating_desc">Rating Descending</option>
					<option value="rating_asc">Rating Ascending</option>
					<option value="date_desc">Release Date Descending</option>
					<option value="date_asc">Release Date Ascending</option>
				</select>			
			</div>

			{currentMovies.map((movie, index) => (
				<MovieItem key={index} movie={movie} />
			))}

			<div className="topbar-filter">
				<label>Movies per page:</label>
				<select value={moviesPerPage} onChange={(e) => {
					setMoviesPerPage(Number(e.target.value));
					setCurrentPage(1); // Sayfa numarasýný sýfýrla
				}}>
					<option value={5}>5 Movies</option>
					<option value={10}>10 Movies</option>
				</select>
				<Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
		
			</div>
		</div>
	);
}
