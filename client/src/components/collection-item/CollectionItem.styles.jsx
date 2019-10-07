import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
      transition: all 0.3s ease-in;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 40vw;
    height: 200px;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media only screen and (max-width: 800px) {
    top: 100px;
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0px 10px;
    font-size: 12px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15x;
`;
