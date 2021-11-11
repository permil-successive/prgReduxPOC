export const actionTypes = {
  UPDATE_TABLE_NAME: "UPDATE_TABLE_NAME",
  UPDATE_CREATE_TABLE_DIALOG_OPEN_STATE:
    "UPDATE_CREATE_TABLE_DIALOG_OPEN_STATE",
  UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE: "UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE",
  UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE_WITH_COLOUM_INDEX:
    "UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE_WITH_COLOUM_INDEX",
  UPDATE_COLOUM_INDEX: "UPDATE_COLOUM_INDEX",
  UPDATE_COLOUM_NAME: "UPDATE_COLOUM_NAME",
  UPDATE_COLOUM_TYPE: "UPDATE_COLOUM_TYPE",
};

export const updateTableNameAction = (tableName) => {
  return {
    type: actionTypes.UPDATE_TABLE_NAME,
    payload: tableName,
  };
};

export const updateCreateTableDialogOpenState = (state) => {
  return {
    type: actionTypes.UPDATE_CREATE_TABLE_DIALOG_OPEN_STATE,
    payload: state,
  };
};

export const updateAddColoumDialogOpenState = (state) => {
  return {
    type: actionTypes.UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE,
    payload: state,
  };
};

export const updateAddColoumDialogOpenStateWithColoumIndex = (state, idx) => {
  return {
    type: actionTypes.UPDATE_ADD_COLOUM_DIALOG_OPEN_STATE_WITH_COLOUM_INDEX,
    payload: {
      addColoumDialogBoxState: state,
      coloumIndex: idx,
    },
  };
};

export const updateColoumIndexAction = (idx) => {
  return {
    type: actionTypes.UPDATE_COLOUM_INDEX,
    payload: idx,
  };
};

export const updateColoumNameAction = (name) => {
  return {
    type: actionTypes.UPDATE_COLOUM_NAME,
    payload: name,
  };
};

export const updateColoumTypeAction = (type) => {
  return {
    type: actionTypes.UPDATE_COLOUM_TYPE,
    payload: type,
  };
};
