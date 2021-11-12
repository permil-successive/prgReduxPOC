import './index.css';

function Rows({keys}) {
  return (
    <>
      {
        keys.map((key) => {
          const { keyName, dataType } = key;
          return (
            <div className="table-row">
              <div className="flex-grow">
                {keyName}
              </div>
              <div className="text-gray-500">
                {dataType}
              </div>
            </div>
          );
        })
      }
    </>
  );
}
  
export default Rows;