import "./index.css";

import Collapsable from './Collapsable';
import Button from '../Button';

function Panel({
  tables,
  onNewTableHandle,
  newColoumHandle,
  deleteColoumHandle,
  deleteTableHandle,
  updateTableHandle,
  updateColoumHandle,
}) {
  return (
    <div className="panel">
      <div className="panel-section panel-CTA" style={{width: "inherit"}}>
        <Button type="primary" onClick={() => console.log('clicked collapse')}>
          Collapse All
        </Button>
        <Button type="primary" className="inline-flex items-center" onClick={onNewTableHandle}>
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
          </svg>
          New Table
        </Button>
      </div>
      <div className="panel-section">
        {
          tables.map((table, idx) => (
            <Collapsable
              table={table}
              newColoumHandle={() => newColoumHandle(idx)}
              deleteColoumHandle={deleteColoumHandle}
              deleteTableHandle={deleteTableHandle}
              updateTableHandle={updateTableHandle}
              updateColoumHandle={updateColoumHandle}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Panel;
