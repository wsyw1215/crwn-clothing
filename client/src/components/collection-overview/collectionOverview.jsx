import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorShopDataForPreview } from "../../redux/collection/collection.selectors";
import CollectionPreview from "../collection-preview/CollectionPreview.jsx";
import { CollectionOverviewContainer } from "./CollectionOverview.styles";

const collectionOverview = ({ shopData }) => {
  return (
    <CollectionOverviewContainer>
      {shopData.map(data => (
        <CollectionPreview {...data} key={data.id} />
      ))}
    </CollectionOverviewContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectorShopDataForPreview
});
export default connect(mapStateToProps)(collectionOverview);
