import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "./pages/Grid/Grid";
import Login from "./pages/Login/Login";
import Result from "./pages/Result/Result";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Yochan Robo
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <div className="app">
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/grid">
            <Grid />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
