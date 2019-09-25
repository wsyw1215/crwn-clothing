import React from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import Collection from "../collection/Collection";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectorShopData } from "../../redux/collection/collection.selectors";
import { Route } from "react-router-dom";
const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectorShopData
});
export default connect(mapStateToProps)(Shop);
