import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/collection/collection.action";

import Spinner from "../../components/spinner/Spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/CollectionOverview.container")
);
const CollectionContainer = lazy(() =>
  import("../collection/Collection.container")
);
const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
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
