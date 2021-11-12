export const actionTypes = {
  CREATE_TABLE: "CREATE_TABLE",
  ADD_COLOUM_TO_TABLE: "ADD_COLOUM_TO_TABLE",
  DELETE_COLOUM_FROM_TABLE: "DELETE_COLOUM_FROM_TABLE",
  DELETE_TABLE: "DELETE_TABLE",
  UPDATE_TABLENAME: "UPDATE_TABLENAME",
  UPDATE_COLOUM: "UPDATE_COLOUM"
};

export const createTableAction = (tableName) => {
  return {
    type: actionTypes.CREATE_TABLE,
    payload: {
      tableName: tableName,
      keys: [],
    },
  };
};

export const addColoumToTableAction = (index, coloumName, dataType) => {
  return {
    type: actionTypes.ADD_COLOUM_TO_TABLE,
    index,
    payload: {
      keys: [{ keyName: coloumName, dataType }],
    },
  };
};

export const deleteColoumFromTableAction = (coloumName, tableName) => {
  return {
    type: actionTypes.DELETE_COLOUM_FROM_TABLE,
    payload: {
      tableName,
      coloumName,
    },
  };
};

export const deleteTableAction = (tableName) => {
  return {
    type: actionTypes.DELETE_TABLE,
    payload: {
      tableName,
    },
  };
};

export const updateTableNameAction = (oldTableName, newTableName) => {
  return {
    type: actionTypes.UPDATE_TABLENAME,
    payload: {
      newTableName,
      oldTableName,
    },
  };
};

export const updateColoumAction = (tableName, oldColoumName, newColoumName, newColoumType) => {
  return {
    type: actionTypes.UPDATE_COLOUM,
    payload: {
      tableName,
      oldColoumName,
      keys: [{ keyName: newColoumName, dataType: newColoumType }],
    },
  };
};
