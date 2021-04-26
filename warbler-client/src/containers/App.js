import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
// import Main
import Main from "./Main";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        {/* Main component*/}
        {/* components/ folder make a new file Homepage.js*/}
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
