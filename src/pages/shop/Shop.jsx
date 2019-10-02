import React from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import Collection from "../collection/Collection";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { setCollections } from "../../redux/collection/collection.action";
import WithSpinner from "../../components/with-spinner/withSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log("collection from firebase", collectionsMap);
      setCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          render={props => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCollections: collections => dispatch(setCollections(collections))
});
export default connect(
  null,
  mapDispatchToProps
)(Shop);
