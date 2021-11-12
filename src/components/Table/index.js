import './index.css';
import {default as Rows} from './Rows';

function Table({ tables }) {
  return tables.map((table) => {
    const { tableName, keys } = table;
    return (
      <div className="table-container" >
        <div className="table-header">
          { tableName }
        </div>
        <Rows keys={keys} />
      </div>
    )
  });
}
  
export default Table;