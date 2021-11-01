import Button from "@mui/material/Button";
import { updateStoredMovies } from "./App";

export function DeleteMovieButton(props) {

    const deletebuttonStyles = {
        backgroundColor: "white", // Styling for Delete button
        color: "crimson",
        height: "24px",
      };

  return (
    <Button
      variant="contained"
      style={deletebuttonStyles}
      onClick={() => {
        const removeIdx = props.index;
        props.setMovies(props.movies.filter((mv, idx) => idx !== removeIdx)); //Filter fn. to remove movie to be deleted

        updateStoredMovies(props.movies.filter((mv, idx) => idx !== removeIdx));
      }}
    >
      <i class="fas fa-trash"></i>
    </Button> // Delete button to delete movie; passed as props
  );
}
