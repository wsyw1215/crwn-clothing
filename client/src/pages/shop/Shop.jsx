import React, { useEffect } from "react";
import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverview.container";
import CollectionContainer from "../collection/Collection.container";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/collection/collection.action";

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CollectionContainer}
      />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(
  null,
  mapDispatchToProps
)(Shop);
