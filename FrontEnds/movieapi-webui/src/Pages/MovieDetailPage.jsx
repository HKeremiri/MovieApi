import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import MovieImageAndWatchTrailer from "../Components/MovieImageAndWatchTrailer";
import MovieDetailShare from "../Components/MovieDetailShare";
import MovieDetailRate from "../Components/MovieDetailRate";
import MovieDetailOverview from "../Components/MovieDetailOverview";
import MovieDetailReview from "../Components/MovieDetailReview";
import MovieDetailCast from "../Components/MovieDetailCast";
import MovieDetailRelatedMovies from "../Components/MovieDetailRelatedMovies";
import MovieDetailMedia from "../Components/MovieDetailMedia";

export default function MovieDetailPage() {
    const { id } = useParams();
    const movieId = Number(id);
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [attempt, setAttempt] = useState(0); // retry tetiklemek için

    const fetchMovie = useCallback(async (signal) => {
        if (!movieId) {
            setError('Geçersiz film ID');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://localhost:7088/api/Movies/GetMovie?id=${movieId}`, { signal });
            if (!res.ok) {
                // detaylý hata mesajý almak istersen res.status/text kullan
                throw new Error(`Sunucudan yanýt alýnamadý (${res.status})`);
            }
            const data = await res.json();

            // API dökümüne göre map'leyelim
            setMovie({
                id: data.movieId ?? data.id ?? movieId,
                title: data.title ?? '',
                coverImageUrl: data.coverImageUrl ?? 'images/uploads/default.jpg',
                rating: data.rating ?? 0,
                description: data.description ?? '',
                duration: data.duration ?? data.ruration ?? '',
                releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
                createdYear: data.createdYear ?? '',
                status: data.status ?? true,
                raw: data
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message);
                setMovie(null);
            }
        } finally {
            setLoading(false);
        }
    }, [movieId]);

    useEffect(() => {
        const controller = new AbortController();
        fetchMovie(controller.signal);

        return () => controller.abort();
    }, [fetchMovie, attempt]);

    // retry helper
    const handleRetry = () => {
        setAttempt(a => a + 1);
    };

    // basit loading / error UI
    if (loading) {
        return (
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-12">
                            <div style={{ padding: 40, textAlign: 'center' }}>Loading movie details...</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-12">
                            <div style={{ padding: 40, textAlign: 'center' }}>
                                <p>Hata: {error}</p>
                                <button className="btn" onClick={handleRetry}>Tekrar dene</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // movie gelmediyse (ör. hiç veri) boþ fallback
    if (!movie) {
        return (
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-12">
                            <div style={{ padding: 40, textAlign: 'center' }}>Film bulunamadý.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const formattedRelease = movie.releaseDate ? movie.releaseDate.toLocaleDateString() : '—';

    return (
        <>
            <div className="hero mv-single-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">{/* breadcrumb vs */}</div>
                    </div>
                </div>
            </div>

            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        {/* movie hazýr olduktan sonra child component'lara geçir */}
                        <MovieImageAndWatchTrailer image={movie.coverImageUrl} />

                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                <h1 className="bd-hd">{movie.title} <span>{movie.createdYear}</span></h1>

                                <MovieDetailShare />
                                <MovieDetailRate rating={movie.rating}  />

                                <div className="movie-tabs">
                                    <div className="tabs">
                                        <ul className="tab-links tabs-mv">
                                            <li className="active"><a href="#overview">Overview</a></li>
                                            <li><a href="#reviews"> Reviews</a></li>
                                            <li><a href="#cast"> Cast & Crew </a></li>
                                            <li><a href="#media"> Media</a></li>
                                            <li><a href="#moviesrelated"> Related Movies</a></li>
                                        </ul>

                                        <div className="tab-content">
                                            <MovieDetailOverview  />
                                            <MovieDetailReview movie={movie} />
                                            <MovieDetailCast movie={movie} />
                                            <MovieDetailMedia movie={movie} />
                                            <MovieDetailRelatedMovies movie={movie} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: 20 }}>
                                    <p className="rate"><i className="ion-android-star" /> <span>{movie.rating}</span> /10</p>
                                    <p className="describe">{movie.description}</p>
                                    <p className="run-time">
                                        Run Time: {movie.duration} .
                                        <span> MMPA: PG-13 </span> .
                                        <span>Release: {formattedRelease}</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
