import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMoive();
  });
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.large_cover_image} alt="" />
          <hr />
          <h3>
            Run Time : {movie.runtime} / Rating : {movie.rating}
          </h3>
          <h3>Movie description</h3>
          <h4>{movie.description_intro}</h4>
        </div>
      )}
    </>
  );
}

export default Detail;
