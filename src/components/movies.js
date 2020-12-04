import React from "react";
import Movie from "./movie";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("movies") === null) {
        setMovies("No hay conexión a internet!");
      } else {
        setMovies(localStorage.getItem("movies"));
      }
    } else {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setMovies(res);
        });
    }
  }, []);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((e, i) => (
            <Movie key={i} movie={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Movies;
