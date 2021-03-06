import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import ShoppingIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink
} from "./Header.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGNOUT
          </OptionLink>
        ) : (
          <OptionLink to="/sign">SIGNIN</OptionLink>
        )}
        <ShoppingIcon />
      </OptionContainer>
      {!hidden && <CartDropDown />}
    </HeaderContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
