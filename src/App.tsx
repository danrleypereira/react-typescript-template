import React from "react";

import GlobalStyle from "./styles/globals";

import Player from "./Components/Player/playerdemo";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from "./pages/signin";

import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Route path="/">
          <h1>Main</h1>
        </Route>
        <Route path="/Login" component={Signin} />
        <Route path="/Player" component={Player} />
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
