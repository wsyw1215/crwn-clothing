import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import Shop from './pages/shop/Shop.jsx'
import { Route, Switch } from "react-router-dom";
import Header from './components/header/Header.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={Shop} ></Route>
      </Switch>
    </div>
  );
}

export default App;
