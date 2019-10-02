import { CollectionActionTypes } from "./collection.type";
const INITIAL_STATE = {
  shopData: null
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.SET_COLLECTION:
      return {
        ...state,
        shopData: action.payload
      };
    default:
      return state;
  }
};

export default collectionReducer;
