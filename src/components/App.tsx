import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../router";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      App
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
