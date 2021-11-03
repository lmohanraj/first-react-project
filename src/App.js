import "./App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { NavBar } from "./NavBar";

export default function App() {
   
  const [darkTheme, setDarkTheme] = useState(false);
  const [checked, setChecked] = useState(false);
function ControlledSwitches() {
  
  const handleChange = (event) => {
    setChecked(!checked);
    setDarkTheme(!darkTheme);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

  const theme = createTheme({
    palette: {
      mode: darkTheme? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={3} style={{minHeight:"100vh"}}>
    <section>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/add-movie">Add Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="themeChanger">
        <Brightness4OutlinedIcon />
          <ControlledSwitches />
        </li>
      </ul>
    </nav>
    <NavBar></NavBar>
    </section>
    </Paper>
    </ThemeProvider>
  );
}
