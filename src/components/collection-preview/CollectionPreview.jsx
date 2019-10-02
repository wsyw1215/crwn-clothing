import React from "react";
import {
  CollectionPreviewCintainer,
  Title,
  PreviewContainer
} from "./CollectionPreview.styles";
import CollectionItem from "../collection-item/CollectionItem";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match }) => {
  console.log(history);
  console.log(match);
  return (
    <CollectionPreviewCintainer>
      <Title
        onClick={() => {
          history.push(`${match.url}/${title.toLowerCase()}`);
        }}
      >
        {title.toUpperCase()}
      </Title>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem item={item} key={item.id} />
          ))}
      </PreviewContainer>
    </CollectionPreviewCintainer>
  );
};

export default withRouter(CollectionPreview);
