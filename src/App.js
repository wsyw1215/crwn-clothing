import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.jsx";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import SignPage from "./pages/signpage/SignPage.jsx";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsbscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
