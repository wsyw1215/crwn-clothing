import styled, { css } from "styled-components";

const colStyle = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${colStyle}
  @media only screen and (max-width: 800px) {
    margin-right: 10px;
  }
`;
export const Quantity = styled.span`
  display: flex;
  ${colStyle}
`;
export const Price = styled.span`
  ${colStyle}
  @media only screen and (max-width: 800px) {
    width: 13%;
  }
`;

export const Value = styled.span`
  margin: 0px 10px;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
