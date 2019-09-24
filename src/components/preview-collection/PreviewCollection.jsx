import React from "react";
import "./PreviewCollections.scss";
import CollectionItem from '../../components/collection-item/CollectionItem'

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem item={item} key={item.id}/>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
