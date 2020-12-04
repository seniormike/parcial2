import React from "react";

const Movie = (movie) => {
  console.log(movie);
  return (
    <tr>
      <th scope="row">{movie.id}</th>
      <td>{movie.name}</td>
      <td>{movie.channel}</td>
      <td>{movie.description}</td>
    </tr>
  );
};

export default Movie;
