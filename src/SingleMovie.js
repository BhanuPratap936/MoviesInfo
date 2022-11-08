import React from "react";
import { useParams, Link } from "react-router-dom";

import useFetch from "./useFetch";

const SingleMovie = () => {
	const { id } = useParams();
	const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

	if (isLoading) {
		return <div className="loading"></div>;
	}

	if (error.show) {
		return (
			<div className="page-error">
				<h1>{error.msg}</h1>
				<Link to={"/"} className="btn">
					back to movies
				</Link>
			</div>
		);
	}

	const {
		Poster: poster,
		Title: title,
		Plot: plot,
		Released: year,
		Genre: genre,
		imdbRating: imdb,
		Actors: actors,
		Director: director,
		Writer: writer,
		Runtime: runtime,
		Country: country,
		Type: type,
		Rated: rated,
	} = movie;

	return (
		<section className="single-movie">
			<img src={poster} alt={title} />
			<div className="single-movie-info">
				<h2>{title}</h2>
				<p>
					<span className="movie-data">Summary</span> {plot}
				</p>
				<p>
					<span className="movie-data">Released</span> <strong>{year}</strong>
				</p>
				<p>
					<span className="movie-data">Type</span> <strong>{type}</strong>
				</p>
				<p>
					<span className="movie-data">IMDb</span> <strong>{imdb}</strong> out
					of 10
				</p>
				<p>
					<span className="movie-data">Rated</span> {rated}
				</p>
				<p>
					<span className="movie-data">Genre</span> {genre}
				</p>
				<p>
					<span className="movie-data">Actors</span> {actors}
				</p>
				<p>
					<span className="movie-data">Director</span> {director}
				</p>
				<p>
					<span className="movie-data">Writer</span> {writer}
				</p>
				<p>
					<span className="movie-data">Runtime</span> {runtime}
				</p>
				<p>
					<span className="movie-data">Country</span> {country}
				</p>
				<Link to={"/"} className="btn">
					back to movies
				</Link>
			</div>
		</section>
	);
};

export default SingleMovie;
