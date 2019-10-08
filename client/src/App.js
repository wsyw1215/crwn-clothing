import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
// lazy load， 將 main.js分割成較小檔案，並在需要時才載入需要的資源，以提升初次載入的速度
const HomePage = lazy(() => import("./pages/homepage/HomePage.jsx"));
const Shop = lazy(() => import("./pages/shop/Shop.jsx"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const SignPage = lazy(() => import("./pages/signpage/SignPage.jsx"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* 處理Error */}
        <ErrorBoundary>
          {/* Suspense 幫助 lazy load 尚未載入前，仍可正常用做，使用fallback讓還沒載入完成前先顯載入元件 */}
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            {/* 如果已登入，就轉址到根路徑 */}
            <Route
              exact
              path="/sign"
              render={() => (currentUser ? <Redirect to="/" /> : <SignPage />)}
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};
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
