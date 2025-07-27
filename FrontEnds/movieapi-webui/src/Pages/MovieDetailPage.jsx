import MovieImageAndWatchTrailer from "../Components/MovieImageAndWatchTrailer";
import MovieDetailShare from "../Components/MovieDetailShare";
import MovieDetailRate from "../Components/MovieDetailRate";
import MovieDetailOverview from "../Components/MovieDetailOverview";
import MovieDetailReview from "../Components/MovieDetailReview";
import MovieDetailCast from "../Components/MovieDetailCast";
import MovieDetailRelatedMovies from "../Components/MovieDetailRelatedMovies";
import MovieDetailMedia from "../Components/MovieDetailMedia";
export default function MovieDetailPage() {
	const id = 1;

	return (
		<>
			<div className="hero mv-single-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
			 {/*<h1> movie listing - list</h1>*/}
				{/*<ul class="breadcumb">*/}
				{/*	<li class="active"><a href="#">Home</a></li>*/}
				{/*	<li> <span class="ion-ios-arrow-right"></span> movie listing</li>*/}
				{/*</ul> */}
			</div>
		</div>
	</div>
</div>
			<div className="page-single movie-single movie_single">
				<div className="container">
					<div className="row ipad-width2">
						<MovieImageAndWatchTrailer/>
					
						<div className="col-md-8 col-sm-12 col-xs-12">
							<div className="movie-single-ct main-content">
								<h1 className="bd-hd">Skyfall: Quantum of Spectre <span>2015</span></h1>
								<MovieDetailShare />
								<MovieDetailRate />
								<div className="movie-tabs">
									<div className="tabs">
										<ul className="tab-links tabs-mv">
											<li className="active"><a href="#overview">Overview</a></li>
											<li><a href="#reviews"> Reviews</a></li>
											<li><a href="#cast">  Cast & Crew </a></li>
											<li><a href="#media"> Media</a></li>
											<li><a href="#moviesrelated"> Related Movies</a></li>
										</ul>
										<div className="tab-content">
											<MovieDetailOverview />
											<MovieDetailReview />
											<MovieDetailCast />
                                            <MovieDetailMedia />
											<MovieDetailRelatedMovies />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>   
			</>
    );
}