import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetailsById } from "services/api";
import BackLink from "shared/BackLink/BackLink";
import Loader from "shared/Loader/Loader";
import { AddInfo, Info, Item, List, NavItem, Paragraph, Rating, Title, Wrapper } from "./MovieDetails.styled";
import defaultImage from '../../images/default-poster.jpg';

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        getMovieDetailsById(movieId)
            .then(data => {
                setError(null);
                setMovie(data);
            })
            .catch(error => {
                setError(error);
                setMovie(null);
            })
    }, [movieId]);

    if (!movie) {
        return;
    };

    const { title, release_date, overview, poster_path, genres, vote_average } = movie;
    const genreList = genres.map(({ name }) => name).join(", ");
    const backLinkHref = location.state?.from ?? "/movies";
    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : defaultImage;

    return (
        <main>
            {error && <p>Movie loading fail</p>}

            <BackLink to={backLinkHref}>Go back</BackLink>
            <Wrapper>
                <img src={imgSrc} alt={title} width="300"/>
                <Info>
                    <Title>{title} ({release_date.slice(0, 4)})</Title>
                    <Paragraph><b>Vote average:</b> <Rating>{vote_average}</Rating></Paragraph>
                    <Paragraph><b>Overview:</b> {overview}</Paragraph>
                    <Paragraph><b>Genres:</b> {genreList}</Paragraph>
                    <AddInfo>Additional information</AddInfo>
                    <List>
                        <Item>
                            <NavItem to="cast" state={{ from: backLinkHref }}>Cast</NavItem>
                        </Item>
                        <Item>
                            <NavItem to="reviews" state={{ from: backLinkHref }}>Reviews</NavItem>
                        </Item>                
                    </List>
                </Info>
            </Wrapper>

            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </main>
    );
};
