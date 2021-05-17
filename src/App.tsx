import React from "react";

import SigninPage from "./pages/signin";
import GlobalStyle from "./styles/globals";

import Player from "./Components/Player/playerdemo";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signin from "./pages/signin";

import "./App.css";

function App() {
  return (
    <>
      {/*}
      <Router>
        <div className="App">
          <header className="App-header">

            <Signin/>
          </header>
        </div>
      </Router>
      */}
      <Router>
        <Route path="/">
          <h1>Main</h1>
        </Route>
        <Route  path="/Login" component={Signin}/>
        <Route  path="/Player" component={Player}/>
        {/* <SigninPage /> */}
        <GlobalStyle />
      </Router>

    </>
  );
}

export default App;
