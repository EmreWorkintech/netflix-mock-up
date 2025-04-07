import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background: #262626;
  width: 100vw;
  min-height: 100vh;
`;

const Landing = styled.p`
  margin: 0;
`;

function App() {
  //hooklar
  const [activeProfile, setActiveProfile] = useState(null);

  //helper fonksiyonlar

  //template: JSX
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Landing>Landing Page</Landing>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/browse">
          <Browse activeProfile={activeProfile} />
        </Route>
      </Switch>
      <div className="control_panel">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/browse">Browse</Link>
      </div>
    </Container>
  );
}

export default App;
