import { default as initialState } from "./initialState";
import { actionTypes } from "./tableAction";

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TABLE:
      return [...state, { ...action.payload }];
    case actionTypes.ADD_COLOUM_TO_TABLE: {
      const newState = [...state];
      newState[action.index] = {
        ...state[action.index],
        keys: [...state[action.index].keys, ...action.payload.keys],
      };
      return newState;
    }
    case actionTypes.DELETE_COLOUM_FROM_TABLE: {
      const tableIndex = state.findIndex(
        (state) => state.tableName === action.payload.tableName,
      );
      const newState = [...state];
      newState[tableIndex].keys = newState[tableIndex].keys.filter(
        (colName) => colName.keyName !== action.payload.coloumName
      );
      return newState;
    }
    case actionTypes.UPDATE_TABLENAME: {
      const tableIndex = state.findIndex(
        (state) => state.tableName === action.payload.oldTableName,
      );
      const newState = [...state];
      newState[tableIndex].tableName = action.payload.newTableName;
      return newState;
    }
    case actionTypes.UPDATE_COLOUM: {
      const tableIndex = state.findIndex(
        (state) => state.tableName === action.payload.tableName,
      );
      const newState = [...state];
      const ColoumIndex = newState[tableIndex].keys.findIndex(
        (coloum) => coloum.keyName === action.payload.oldColoumName,
      );
      newState[tableIndex].keys[ColoumIndex] = action.payload.keys[0];
      return newState;
    }
    case actionTypes.DELETE_TABLE:
      return state.filter(
        (state) => state.tableName !== action.payload.tableName
      );
    default:
      return state;
  }
};
