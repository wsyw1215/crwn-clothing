import { all, call } from "redux-saga/effects";
import { collectionSagas } from "./collection/collection.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
export default function* rootSaga() {
  yield all([call(collectionSagas), call(userSagas), call(cartSagas)]);
}
