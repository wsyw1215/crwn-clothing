import React from "react";
import {
  CollectionPreviewCintainer,
  Title,
  PreviewContainer
} from "./CollectionPreview.styles";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewCintainer>
      <Title>{title.toUpperCase()}</Title>
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

export default CollectionPreview;
