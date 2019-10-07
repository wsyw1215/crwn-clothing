import styled from "styled-components";
export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    padding-left: 10px;
  }
  & > div {
    margin-bottom: 30px;
  }
`;
