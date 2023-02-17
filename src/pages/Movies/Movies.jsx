import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import SearchBox from 'shared/SearchBox/SearchBox';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';

export default function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovieByQuery(query)
      .then(data => {
        setSearchedMovies(data.results);
        if (data.results.length === 0) {
          toast.info('No movie with such request.');
        }
      })
      .catch(error => {
        setError(error);
        setSearchedMovies([]);
      });
  }, [query]);

  const handleSearchBoxSubmit = value => {
    setSearchParams({ query: value.toLowerCase() });
  };

  return (
    <main>
      <SearchBox onSubmit={handleSearchBoxSubmit} />

      {error && <p>Something go wrong. Try again</p>}

      {searchedMovies.length > 0 && <MovieList movies={searchedMovies} />}
    </main>
  );
}
