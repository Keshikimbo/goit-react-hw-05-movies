import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { NavItem } from "./MovieList.styled.";

export default function MovieList({ movies }) {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({ title, id }) => (
                <li key={id}>
                    <NavItem to={`/movies/${id}`} state={{from: location}}>
                        {title}
                    </NavItem>
                </li>
            ))}
        </ul>
    );
};

MovieList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
      id: PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
  })
).isRequired;