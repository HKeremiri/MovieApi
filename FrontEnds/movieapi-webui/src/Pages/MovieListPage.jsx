
import BreadcrumbHeader from "../Components/BreadcrumbHeader";
import MovieList from "../Components/MovieList";

import SearchMovie from "../Components/SearchMovie";
export default function MovieListPage() {
	const BreadContent = {
		title: "Movie Listing - List",
		breadcrumbs: [
			{ label: "Home", link: "#", active: true },
			{ label: "Movie Listing" }
		]
	};
    return (
		<>
			<BreadcrumbHeader title={BreadContent.title}
			breadcrumbs={BreadContent.breadcrumbs} />
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