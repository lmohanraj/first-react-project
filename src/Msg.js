import { useState } from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import { Counter } from './Counter';

export function Msg({ name, pic, desc, deleteMovieButton, id }) {

  const [show, setShow] = useState(false); //useState to change description show
  const history = useHistory();
  const displayDesc = () => {
    setShow(!show);
  };

  // Styling for edit icon
  const editIconStyles = {
    width: "35px",
    height: "10px",
    backgroundColor: "white"
  };

  return (
    <div className="movie-section">

      {/* Movie poster */}
      <div className="poster-container">
        <img className="poster" src={pic} alt={name} />
      </div>

      <div className="name-and-edit">

        {/* Display movie name */}
        <div><h1 className="name">{name}</h1></div>
        {/* Display the edit icon */}
        {/* <div>
              <Fab style={editIconStyles} color="grey" aria-label="edit">
                 <EditIcon />
              </Fab>
            </div> */}

        <InfoIcon className="Info-icon" onClick={() => history.push("/movies/" + id)} />

      </div>

      <Counter />
      <div className="desc-and-delete">
        {/* Button to show & hide description */}
        {/* Toggle the button up & down during display show & hide res. */}
        <button onClick={displayDesc}>
          {show ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
        </button>
        <div>
          <Fab style={editIconStyles} color="grey" aria-label="edit">
            <EditIcon />
          </Fab>
        </div>
        {deleteMovieButton}
      </div>
      {/* Toggle logic to show & hide the description */}
      {/* It is called conditional rendering */}
      {show ? <p className="description">{desc}</p> : ""}

      {/* Count & display like and dislike icons */}
      {/* <Counter /> */}
    </div>
  );
}
