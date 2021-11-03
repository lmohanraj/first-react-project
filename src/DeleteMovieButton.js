import Button from "@mui/material/Button";
import { useHistory } from "react-router";

export function DeleteMovieButton({id,getMovies}) {

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

      const deleteMovie = (id) => {
        fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies/"+id,
        {method:'DELETE'})
        .then( data => data.json())
        .then( () => getMovies());
      }

  return (
      <div className="edit-delete">
    <Button
      variant="contained"
      style={editbuttonStyles}
      onClick={() => {
        history.push("edit/"+id);
      }}
    >
      <i class="fas fa-edit"></i>
    </Button>  
    <Button
      variant="contained"
      style={deletebuttonStyles}
      onClick={() => {
        deleteMovie(id);
      }
    }
    >
      <i class="fas fa-trash"></i>
    </Button>  
    </div>
  );
}
