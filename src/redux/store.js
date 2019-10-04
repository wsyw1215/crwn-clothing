import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// 只有開發模式才讓redux狀態print出來(middleware加入logger)
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default { store, persistor };
