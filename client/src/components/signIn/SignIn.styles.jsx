import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  margin: 10px 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 800px) {
    display:block;
    width:100%;
  }
`;
