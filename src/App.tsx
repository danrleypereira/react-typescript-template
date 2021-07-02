import React from "react";
//importações de módulos das bibliotecas
import { BrowserRouter as Router, Route } from "react-router-dom";
//páginas
import Signin from "./pages/signin";
import Taxes from "./pages/taxes";
//componentes
import { Button } from "antd";
import Player from "./Components/Player/playerdemo";
//estilos
import GlobalStyle from "./styles/globals";
import "./App.css";

// Interfaces

// Declaração do componente
const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        {/*
          Sem o exact o componente será mostrado em todas as rotas que
          começam com '/'
        */}
        <Route exact path="/">
          <div className="App">
            <Button type="primary">Button</Button>
          </div>
        </Route>
        <Route path="/taxas" component={Taxes} />
        <Route path="/Login" component={Signin} />
        <Route path="/Player" component={Player} />
        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
