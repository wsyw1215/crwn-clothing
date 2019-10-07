import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media only screen and (max-width: 800px) {
    width:90%;
    margin: 10px auto 0;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  &:last-child {
    width: 8%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  @media only screen and (max-width: 800px) {
    width:unset;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media only screen and (max-width: 800px) {
    font-size: 24px;
    margin-top: 15px;
  }
`;

export const WarningText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: red;
  margin: 40px 0px;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
    margin: 20px 0px;
  }
`;
