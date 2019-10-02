import React from "react";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import Collection from "../collection/Collection";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { setCollections } from "../../redux/collection/collection.action";
class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log('collection from firebase',collectionsMap)
      setCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={Collection}
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
