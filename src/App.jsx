import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <p>Landing Page</p>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
      </Switch>
      <div className="control_panel">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/browse">Browse</Link>
      </div>
    </>
  );
}

export default App;
