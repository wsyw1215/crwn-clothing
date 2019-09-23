import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  console.log(imageUrl);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(" ${imageUrl} ")` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">${ price }</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
