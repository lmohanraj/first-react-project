import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { updateStoredMovies } from "./App";

export function DeleteMovieButton(props) {

    const deletebuttonStyles = {
        backgroundColor: "white", // Styling for Delete button
        color: "crimson",
        height: "24px",
      };
      const editbuttonStyles = {
        backgroundColor: "white", // Styling for Delete button
        color: "grey",
        height: "24px",
      };
      const history = useHistory();

  return (
      <div className="edit-delete">
    <Button
      variant="contained"
      style={editbuttonStyles}
      onClick={() => {
        history.push('/edit-movie/'+props.index);
      }}
    >
      <i class="fas fa-edit"></i>
    </Button>  
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
    </Button>  
    </div>
  );
}
