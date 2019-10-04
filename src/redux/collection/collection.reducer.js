import { CollectionActionTypes } from "./collection.type";
const INITIAL_STATE = {
  shopData: null,
  isFetching: false,
  errorMessage: undefined
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };
    case CollectionActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shopData: action.payload
      };
    case CollectionActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage:action.payload
      };
    default:
      return state;
  }
};

export default collectionReducer;
