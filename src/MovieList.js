import { Msg } from "./Msg";
import { DeleteMovieButton } from "./DeleteMovieButton";
import { useEffect, useState } from "react";

export function MovieList() {

  // const API_URL = "https://6180e2e68bfae60017adfc81.mockapi.io/movies";
  const API_URL = "https://node-app-mohan.herokuapp.com";
  
    const [movies, setMovies] = useState([]);
    const getMovies = () => {
      fetch(`${API_URL}/movies`)
      .then( data => data.json())
      .then( mvs => setMovies(mvs));
    }
        useEffect(getMovies,[]);
  return (
    <div className="App">  
    <div className="movie-container">
      {/* Calling the "Msg" component to display movie name, poster & desc */}
      {movies.map((movie) => {
          return(
      <Msg
        key={movie.id}
        name={movie.name}
        pic={movie.poster}
        desc={movie.summary}
        id={movie.id}
        rating={movie.rating}
        deleteMovieButton={<DeleteMovieButton
          id={movie.id}
          getMovies={getMovies}
        ></DeleteMovieButton> // Delete button to delete movie; passed as props
        } />);
    })}
    </div>
    </div>
  );
}
