import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { updateStoredMovies } from "./App";
import { getFromStorage } from './App';

export function EditMovieForm({movies, setMovies}) {

    const addbuttonStyles = {
        backgroundColor: "crimson", // Styling for ADD MOVIE button
      };

      //Get movie details
      const {id} = useParams();
      const history = useHistory();
      const movie = getFromStorage("movies")[id];
      const [movieName, setMovieName] = useState(movie.name); //useState for new movie name
      const [moviePoster, setMoviePoster] = useState(movie.pic); //useState for new movie poster
      const [movieDescription, setMovieDescription] = useState(movie.desc); //useState for new movie description
      const [movieTrailer, setMovieTrailer] = useState(movie.trailer);
      
      const editMovie = () => {
        // Function to find element & update data
        const newMovie = {
          name: movieName,
          pic: moviePoster,
          desc: movieDescription,
          trailer: movieTrailer,
        };
         
        //Create copy of movies
        //Replace the edited movie
        //set Movies using useState
        let updatedMovies = [...movies];
        updatedMovies[id] = newMovie;
        setMovies(updatedMovies);
        updateStoredMovies(updatedMovies); //useState for movies array
        history.push('/movies');
      };
  return (
    <div className="Add-movie-form">
      {/* Input field for adding new movie name */}
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter a movie name"
        value={movieName}
        onChange={(evt) => setMovieName(evt.target.value)} />

      {/* Input field for adding new movie poster */}
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        placeholder="Enter the movie poster url"
        value={moviePoster}
        onChange={(evt) => setMoviePoster(evt.target.value)} />

      {/* Input field for adding new movie description */}
      <TextField
        className="TextField"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        placeholder="Enter the movie description"
        value={movieDescription}
        onChange={(evt) => setMovieDescription(evt.target.value)} />

      <TextField
        className="TextField"
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        placeholder="Enter the movie trailer link"
        value={movieTrailer}
        onChange={(evt) => setMovieTrailer(evt.target.value)} />

      {/* ADD/EDIT MOVIE button */}
      
        <Button
        variant="contained"
        style={addbuttonStyles}
        onClick={editMovie}
        >
        Edit movie
      </Button> 
    </div>
  );
}
