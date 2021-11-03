import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export function EditMovieForm() {

  const {id} = useParams();
  const history = useHistory();
    const addbuttonStyles = {
        backgroundColor: "crimson", // Styling for ADD MOVIE button
      };
    const [movie, setMovie] = useState([]);
    const [movieName, setMovieName] = useState(""); //useState for new movie name
    const [moviePoster, setMoviePoster] = useState(""); //useState for new movie poster
    const [movieDescription, setMovieDescription] = useState(""); //useState for new movie description
    const [movieTrailer, setMovieTrailer] = useState("");
    
    const getMovie = () => {
      fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies/"+id)
      .then( data => data.json())
      .then( mv => {
        setMovie(mv)
        setMovieName(mv.name);
        setMoviePoster(mv.pic);
        setMovieDescription(mv.desc);
        setMovieTrailer(mv.trailer);
      });
    // });
  }
   

    console.log(movie.name);

      //Get movie details
      
      useEffect(getMovie,[id]);
      
      const updateMovie = (editedMovie) => {
        fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies/" + id,
        {
          method:"PUT",
          body : JSON.stringify(editedMovie),
          headers : {"Content-type" : "application/json"},
      })
        .then( data => data.json())
        .then( () => history.push('/movies'))
      }
      
      const editMovie = () => {
        // Function to find element & update data
        const newMovie = {
          name: movieName,
          pic: moviePoster,
          desc: movieDescription,
          trailer: movieTrailer,
        };
         
        updateMovie(newMovie);
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
