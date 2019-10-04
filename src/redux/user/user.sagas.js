import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.type";
import {
  auth,
  googleProvider,
  createUserProfileDocuments,
  getCurrentUser
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocuments, userAuth);
    const userSnaphot = yield userRef.get();
    yield put(signInSuccess({ id: userSnaphot.id, ...userSnaphot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
// 使用Google登入
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
// 使用Email登入
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpWithEmail() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmail);
}
// 註冊
export function* signUpWithEmail({
  payload: { email, password, displayName }
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData:{ displayName }}));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* signUpAndSignIn({
  payload: {
    user,
    additionalData: { displayName }
  }
}) {
  try {
    yield createUserProfileDocuments(user, { displayName: displayName });
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpAndSignIn);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpWithEmail),
    call(onSignUpSuccess)
  ]);
}
