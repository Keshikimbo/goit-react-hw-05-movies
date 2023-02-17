const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '29d75f8daddd6b3269c5d4be86cafad5';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function getMovieDetailsById(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function getCastById(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function getReviewsById(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function getMovieByQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
