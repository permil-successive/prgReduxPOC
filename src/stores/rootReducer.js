import { combineReducers } from "redux";

import { tableReducer } from "./table";

export const getReducers = () => {
  return combineReducers({ table: tableReducer });
};
