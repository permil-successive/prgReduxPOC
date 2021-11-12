import { dataTypes } from '../../constants';

const initialState = [
  {
    tableName: "Table 1",
    keys: [
      {
        keyName: "Col 1",
        dataType: dataTypes[0],
      },
      {
        keyName: "Col 2",
        dataType: dataTypes[1],
      },
      {
        keyName: "Col 3",
        dataType: dataTypes[2],
      },
    ],
  },
];

export default initialState;
