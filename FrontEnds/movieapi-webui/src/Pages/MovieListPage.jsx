import Hero from "../Components/Hero";
import MovieList from "../Components/MovieList";

import SearchMovie from "../Components/SearchMovie";
export default function MovieListPage() {

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
						<MovieList>

						</MovieList>
						<SearchMovie/>
					
					</div>
				</div>
			</div>
        </>
   
    )
}