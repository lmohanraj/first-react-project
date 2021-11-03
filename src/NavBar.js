import { Color } from "./Color";
import { MovieDetails } from "./MovieDetails";
import { AddMovieForm } from "./AddMovieForm";
import { EditMovieForm } from "./EditMovieForm";
import { MovieList } from "./MovieList";
import { Switch, Route } from "react-router-dom";
export function NavBar() {
  return (
    <Switch>
        <Route exact path="/">
          Home page
        </Route>
        <Route path="/edit/:id">
          <EditMovieForm />
        </Route>
        <Route exact path="/movies">
                <MovieList
                ></MovieList>
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/add-movie">
          <AddMovieForm />
        </Route>
        <Route exact path="/color-game">
          <Color />
        </Route>
        <Route exact path="/about">
          About page
        </Route>
      </Switch>
  );
}
