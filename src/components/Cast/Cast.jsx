import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/api";
import { List } from "./Cast.styled";
import defaultPhoto from '../../images/default-photo.jpg'

export default function Cast() {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    const {movieId} = useParams();

    useEffect(() => {
        getCastById(movieId)
        .then(data => {
            setError(null);
            setCast(data.cast)
        })
        .catch(error => {
            setError(error);
            setCast(null);
        });
    }, [movieId]);

    if (cast.length === 0) {
        return;
    };

    return (
        <div>
            {error && <p>Something go wrong. Try again</p>} 
            
            <List>
                {cast.map(({ name, character, profile_path }) => {
                    const imgSrc = profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : defaultPhoto;

                    return (
                        <li key={name}>
                            <img src={imgSrc} alt={name} width="200"/>
                            <p>{name}</p>
                            <p><b>Character:</b> {character}</p>
                        </li>
                    )
                })}
            </List>
        </div>
    );
};
