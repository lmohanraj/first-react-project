import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useHistory, useParams } from 'react-router-dom';
import { getFromStorage } from './App';

export function MovieDetails() {

  const { id } = useParams();
  const movie = getFromStorage("movies")[id];
  const history = useHistory();
  return (
    <div>
      <iframe width="100%" height="550" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="movie-details">
        <h1>{movie.name}</h1>
        <p>{movie.desc}</p>
        <Button variant="contained" startIcon={<ChevronLeftIcon />} onClick={() => history.goBack()}>Back</Button>
      </div>
    </div>
  );
}
