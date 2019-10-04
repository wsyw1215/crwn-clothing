import { CollectionActionTypes } from "./collection.type";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
export const fetchCollectionsStart = () => ({
  type: CollectionActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: CollectionActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: CollectionActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log("collection from firebase", collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(err => dispatch(fetchCollectionsFailure(err.message)));
  };
};
