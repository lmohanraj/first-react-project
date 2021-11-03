import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Color } from "./Color";
import { MovieDetails } from "./MovieDetails";
import { AddMovieForm } from "./AddMovieForm";
import { EditMovieForm } from "./EditMovieForm";
import { NavBar } from "./NavBar";
import { MovieList } from "./MovieList";

export default function App() {
  return (
    <section>
      <NavBar></NavBar>

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
    </section>
  );
}
