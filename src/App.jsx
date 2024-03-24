import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import useStyles from "./components/styles";
import {
  Actors,
  MovieInformation,
  Movies,
  Profile,
  NavBar,
} from "./components";

const App = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
