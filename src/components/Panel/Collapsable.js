import { useState } from "react";

import "./index.css";
import Button from '../Button';

function Collapsable({
  table,
  newColoumHandle,
  deleteColoumHandle,
  deleteTableHandle,
  updateTableHandle,
  updateColoumHandle,
}) {
  const { tableName, keys } = table;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="collapsable-row"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="collapsable-title">{tableName}</div>
        <Button type="primary" className="mr-4" onClick={() => updateTableHandle(tableName)}>
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
            />
          </svg>
        </Button>
        <Button type="primary" className="mr-4" onClick={() => deleteTableHandle(tableName)}>
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
        </Button>
        <span>{isOpen ? "^" : "v"}</span>
      </div>
      {isOpen && (
        <div>
          {keys.map((key) => {
            const { keyName, dataType } = key;
            return (
              <div className="collapsable-keys-item">
                <div className="flex">
                <div className="collapsable-keys-name">{keyName}</div>
                <div className="collapsable-keys-type">{dataType}</div>
                </div>
                <div className="flex">
                  <Button type="primary" className="ml-auto mr-4 h-8 w-12" onClick={() => updateColoumHandle(keyName, tableName)}>
                    <svg
                      class="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 20"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
                      />
                    </svg>
                  </Button>
                  <Button type="primary" className="ml-auto h-8 w-12" onClick={() => deleteColoumHandle(keyName, tableName)}>
                    <svg
                      class="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 20"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            );
          })}
          <div className="collapsable-keys-item">
          <Button type="primary" className="flex-grow" onClick={newColoumHandle}>
            New Coloum
          </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collapsable;
