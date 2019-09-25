import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorShopDataForPreview } from "../../redux/collection/collection.selectors";
import CollectionPreview from "../collection-preview/CollectionPreview.jsx";
import "./collectionOverview.scss";

const collectionOverview = ({ shopData }) => {
  return (
    <div className="collections-overview">
      {shopData.map(data => (
        <CollectionPreview {...data} key={data.id} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    shopData: selectorShopDataForPreview
  });
export default connect(mapStateToProps)(collectionOverview);
