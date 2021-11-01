import { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useHistory } from 'react-router-dom';
import { Counter } from './Counter';
// import Button from "@mui/material/Button";

export function Msg({ name, pic, desc, deleteMovieButton, id }) {

  const [show, setShow] = useState(false); //useState to change description show
  const history = useHistory();
  const displayDesc = () => {
    setShow(!show);
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

        <InfoOutlinedIcon className="Info-icon" onClick={() => history.push("/movies/" + id)} />

      </div>

      <Counter />
      <div className="desc-and-delete">
        {/* Button to show & hide description */}
        {/* Toggle the button up & down during display show & hide res. */}
        <button className="show-button" onClick={displayDesc}>
          {show ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
        </button>
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
