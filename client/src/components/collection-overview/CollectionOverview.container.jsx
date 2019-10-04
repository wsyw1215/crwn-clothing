import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/collection/collection.selectors";
import WithSpinner from "../../components/with-spinner/withSpinner";
import CollectionOverview from "../../components/collection-overview/collectionOverview";
import { compose } from "redux";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionOverview);

export default CollectionOverviewContainer;

