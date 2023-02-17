import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setError(null);
                setMovies(data.results);
            })
            .catch(error => {
                setError(error);
                setMovies([]);
            });
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            {error && <p>Movie loading fail</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </main>
    );
};

