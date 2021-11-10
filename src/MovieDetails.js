import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MovieDetails() {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {  
    fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies/"+id)
      .then( data => data.json())
      .then( mv => setMovie(mv));
    },[id]);
  const history = useHistory();
  console.log(movie);
  return (
    <div>
      <iframe width="100%" height="550" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="movie-details">
        <div className="movie-name-rating">
        <h1>{movie.name}</h1>
        <p><i class="fas fa-star" style={{color:"orange"}}></i> Rating : {movie.rating} / 10</p>
        </div>
        <p>{movie.desc}</p>
        <Button variant="contained" startIcon={<ChevronLeftIcon />} onClick={() => history.goBack()}>Back</Button>
      </div>
    </div>
  );
}
