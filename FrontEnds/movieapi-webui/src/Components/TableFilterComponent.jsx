
export default function TableFilterComponent({ item }) {
    return (
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
			<a href="#" className="list"><i className="ion-ios-list-outline active"></i></a>
			<a href="#" className="grid"><i className="ion-grid"></i></a>
		</div>
		{item}
	<div className="topbar-filter">
		<label>Movies per page:</label>
		<select value={moviesPerPage} onChange={(e) => {
			setMoviesPerPage(Number(e.target.value));
			setCurrentPage(1); // Sayfa numarasýný sýfýrla
		}}>
			<option value={5}>5 Movies</option>
			<option value={10}>10 Movies</option>
		</select>

		<div className="pagination2">
			<span>Page {currentPage} of {totalPages}:</span>
			{Array.from({ length: totalPages }, (_, i) => (
				<a
					key={i}
					className={currentPage === i + 1 ? 'active' : ''}
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setCurrentPage(i + 1);
					}}
				>
					{i + 1}
				</a>
			))}
			{currentPage < totalPages && (
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setCurrentPage(currentPage + 1);
					}}
				>
					<i className="ion-arrow-right-b"></i>
				</a>
			)}
		</div>
	</div>

    );
    
}