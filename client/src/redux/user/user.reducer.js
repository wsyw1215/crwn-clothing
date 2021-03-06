import UserActionTypes from "./user.type";
const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        errorMessage: null
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
