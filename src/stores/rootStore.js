import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { loggerMiddleware, monitorReducerEnhancer } from "./middlwares";
import { getReducers } from "./rootReducer";

export default function configureStore(initialState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(getReducers(), initialState, composedEnhancers);

  return store;
}
