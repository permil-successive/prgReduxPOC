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
    case actionTypes.UPDATE_TABLE_DIALOG_OPEN_STATE:
      return {
        ...state,
        dialogBoxIsOpen: {
          ...state.dialogBoxIsOpen,
          updateTable: action.payload.state,
        },
        oldTableName: action.payload.oldTableName,
        tableName: action.payload.oldTableName,
      }
    case actionTypes.UPDATE_COLOUM_DIALOG_OPEN_STATE:
      return {
        ...state,
        oldTableName: action.payload.oldTableName,
        dialogBoxIsOpen: {
          ...state.dialogBoxIsOpen,
          updateColoum: action.payload.state,
        },
        oldColoumName: action.payload.oldColoumName,
        coloum: {
          ...state.coloum,
          name: action.payload.oldColoumName,
        }
      }
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
