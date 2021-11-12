import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import "./index.css";
import { dataTypes } from "./constants";
import {
  createTableAction,
  addColoumToTableAction,
  deleteColoumFromTableAction,
  deleteTableAction,
  updateColoumAction,
  updateTableNameAction,
} from "./stores";
import { Table, Panel, TextBox, InputDialogBox, Dropdown } from "./components";
import {
  initialState,
  reducer,
  updateAddColoumDialogOpenState,
  updateColoumNameAction,
  updateColoumTypeAction,
  updateCreateTableDialogOpenState,
  updateAddColoumDialogOpenStateWithColoumIndex,
  updateTableNameAction as updateTableNameAppAction,
  updateTableDialogOpenState,
  updateColoumDialogOpenState,
} from './reducers';

function App() {
  const [state, stateDispatch] = useReducer(reducer, initialState)

  console.log(state)

  const tables = useSelector((state) => state.table);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex w-full">
        <Panel
          onNewTableHandle={() => {
            stateDispatch(updateCreateTableDialogOpenState(true))
          }}
          tables={tables}
          deleteColoumHandle={(colName, tableName) =>
            dispatch(deleteColoumFromTableAction(colName, tableName))
          }
          deleteTableHandle={(tableName) =>
            dispatch(deleteTableAction(tableName))
          }
          updateTableHandle={(oldTableName) => {
            stateDispatch(updateTableDialogOpenState(true, oldTableName))
          }}
          updateColoumHandle={
            (oldColoumName, tableName) => stateDispatch(
              updateColoumDialogOpenState(true, tableName, oldColoumName)
            )
          }
          newColoumHandle={(idx) => {
            stateDispatch(updateAddColoumDialogOpenStateWithColoumIndex(true, idx))
          }}
        />
        <div className="Table-container">
          <Table tables={tables} />
        </div>
      </div>

      <InputDialogBox
        isOpen={state.dialogBoxIsOpen.createTable}
        title="Add Table"
        setIsOpen={(isOpen) => stateDispatch(updateCreateTableDialogOpenState(isOpen))}
        onPositiveHandle={() => dispatch(createTableAction(state.tableName))}
      >
        <div>
          <span>Enter Tablename</span>
          <TextBox
            value={state.tableName}
            placeholder="Enter Tablename"
            onChange={(name) => stateDispatch(updateTableNameAppAction(name))}
          />
        </div>
      </InputDialogBox>

      <InputDialogBox
        isOpen={state.dialogBoxIsOpen.updateTable}
        title="Update Table"
        setIsOpen={(isOpen) => stateDispatch(updateTableDialogOpenState(isOpen, state.oldTableName))}
        onPositiveHandle={() => dispatch(updateTableNameAction(state.oldTableName, state.tableName))}
      >
        <div>
          <span>Enter new Tablename</span>
          <TextBox
            value={state.tableName}
            placeholder="Enter new tablename"
            onChange={(name) => stateDispatch(updateTableNameAppAction(name))}
          />
        </div>
      </InputDialogBox>

      <InputDialogBox
        isOpen={state.dialogBoxIsOpen.addColoum}
        title="Add Coloum"
        setIsOpen={(isOpen) => stateDispatch(updateAddColoumDialogOpenState(isOpen))}
        onPositiveHandle={() =>
          dispatch(addColoumToTableAction(state.coloumIdx, state.coloum.name, state.coloum.type))
        }
      >
        <div>
          <span>Enter Coloum Name</span>
          <TextBox
            value={state.coloum.name}
            placeholder="Enter Coloum Name"
            onChange={(name) => stateDispatch(updateColoumNameAction(name))}
          />
        </div>
        <div>
          <span>Select DataType</span>
          <Dropdown
            value={state.coloum.type}
            onChange={(e) => stateDispatch(updateColoumTypeAction(e.target.value))}
            placeholder="Select datatype"
            options={dataTypes}
          />
        </div>
      </InputDialogBox>

      <InputDialogBox
        isOpen={state.dialogBoxIsOpen.updateColoum}
        title="update Coloum"
        setIsOpen={(isOpen) => stateDispatch(updateColoumDialogOpenState(isOpen, state.oldTableName, state.oldColoumName))}
        onPositiveHandle={() => 
          dispatch(updateColoumAction(state.oldTableName, state.oldColoumName, state.coloum.name, state.coloum.type))
        }
      >
        <div>
          <span>Enter new Coloum Name</span>
          <TextBox
            value={state.coloum.name}
            placeholder="Enter Coloum Name"
            onChange={(name) => stateDispatch(updateColoumNameAction(name))}
          />
        </div>
        <div>
          <span>Select new DataType</span>
          <Dropdown
            value={state.coloum.type}
            onChange={(e) => stateDispatch(updateColoumTypeAction(e.target.value))}
            placeholder="Select datatype"
            options={dataTypes}
          />
        </div>
      </InputDialogBox>
    </>
  );
}

export default App;
