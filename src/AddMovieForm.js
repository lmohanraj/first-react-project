import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovieForm(props) {

    const addbuttonStyles = {
        backgroundColor: "crimson", // Styling for ADD MOVIE button
      };

  return (
    <div className="Add-movie-form">
      {/* Input field for adding new movie name */}
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        placeholder="Enter a movie name"
        value={props.movieName}
        onChange={(evt) => props.setMovieName(evt.target.value)} />

      {/* Input field for adding new movie poster */}
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        placeholder="Enter the movie poster url"
        value={props.moviePoster}
        onChange={(evt) => props.setMoviePoster(evt.target.value)} />

      {/* Input field for adding new movie description */}
      <TextField
        className="TextField"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        placeholder="Enter the movie description"
        value={props.movieDescription}
        onChange={(evt) => props.setMovieDescription(evt.target.value)} />

      <TextField
        className="TextField"
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        placeholder="Enter the movie trailer link"
        value={props.movieTrailer}
        onChange={(evt) => props.setMovieTrailer(evt.target.value)} />

      {/* ADD MOVIE button */}
      <Button
        variant="contained"
        style={addbuttonStyles}
        onClick={props.addMovie}
      >
        Add movie
      </Button>
    </div>
  );
}
