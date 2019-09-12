import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop/hats" ></Route>
      </Switch>
    </div>
  );
}

export default App;
