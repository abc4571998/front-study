import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Movie({ coverImg, title, year, summary, genres, id }) {
  return (
    <div>
      <img alt="" src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h2>
      <p>{summary}</p>

      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};

export default Movie;
