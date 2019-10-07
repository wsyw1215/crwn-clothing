import styled, { css } from "styled-components";

const buttonStyle = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const googleSignInButtonStyle = css`
  background-color: #57c2ca;
  color: white;
  font-size: 14px;
  &:hover {
    background-color: white;
    border: 1px solid #57c2ca;
    color: #57c2ca;
  }
`;
const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInButtonStyle;
  return props.inverted ?  invertedButtonStyle :  buttonStyle;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}
  @media only screen and (max-width: 800px) {
    min-width: unset;
    width:100%;
  }
`;
