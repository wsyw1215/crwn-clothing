import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import Shop from "./pages/shop/Shop.jsx";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import SignPage from "./pages/signpage/SignPage.jsx";
import { auth, createUserProfileDocuments } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null
  };
  unsbscribeFromAuth = null;
  componentDidMount() {
    this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/sign" component={SignPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
