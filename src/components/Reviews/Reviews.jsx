import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "services/api";

export default function Reviews() {
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        getReviewsById(movieId)
        .then(data => {
            setError(null);
            setReviews(data.results);
        })
        .catch(error => {
            setError(error);
            setReviews(null);
        });
    }, [movieId]);

    if (!reviews) {
        return;
    };

    return (
        <div>
            {error && <p>Something go wrong. Try again</p>}

            {reviews?.length === 0
            ? (<p>We don't have any reviews for this movie.</p>)
            : (
                <ul>
                    {reviews?.map(({ author, content }) => (
                        <li key={author}>
                            <p><b>Author:</b> {author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
