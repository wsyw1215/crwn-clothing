import React from "react";
import {
  MenuItemContainer,
  BackgroundImage,
  Content,
  Title,
  SubTitle
} from "./MenuItem.styles";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`${size || ""}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <BackgroundImage className="background-image" imgUrl={imageUrl}/>
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
