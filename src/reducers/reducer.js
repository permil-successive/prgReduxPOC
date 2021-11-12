import { actionTypes } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TABLE_NAME:
      return { ...state, tableName: action.payload };
    case actionTypes.UPDATE_CREATE_TABLE_DIALOG_OPEN_STATE:
      return {
        ...state,
        dialogBoxIsOpen: {
          ...state.dialogBoxIsOpen,
          createTable: action.payload,
        },
      };
    case actionTypes.UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE:
      return {
        ...state,
        dialogBoxIsOpen: {
          ...state.dialogBoxIsOpen,
          addColoum: action.payload,
        },
      };
    case actionTypes.UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE_WITH_COLOUM_INDEX:
      return {
        ...state,
        dialogBoxIsOpen: {
          ...state.dialogBoxIsOpen,
          addColoum: action.payload.addColoumDialogBoxState,
        },
        coloumIdx: action.payload.coloumIndex,
      };
    case actionTypes.UPDATE_COLOUM_INDEX:
      return { ...state, coloumIdx: action.payload };
    case actionTypes.UPDATE_COLOUM_NAME:
      return {
        ...state,
        coloum: { ...state.coloum, name: action.payload },
      };
    case actionTypes.UPDATE_COLOUM_TYPE:
      return {
        ...state,
        coloum: { ...state.coloum, type: action.payload },
      };
    default:
      return state;
  }
};
