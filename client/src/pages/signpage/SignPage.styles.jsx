import styled from "styled-components";
export const SignPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media only screen and (max-width: 800px) {
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px auto;
  }
`;
