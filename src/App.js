import './App.css';
import { useState } from 'react';
import InputContainer from './components/Inputs/InputContainer';
import OutputContainer from './components/Outputs/OutputContainer';

function App() {
  const [records, setRecords] = useState([]);
  const [id, setId] = useState(0);

  const saveDataHandler = data => {
    setId(prevId => prevId + 1);
    const newData = { key: id, ...data };

    setRecords(prevRecords => {
      const list = [...prevRecords];
      list.unshift(newData);
      return list;
    });
  };

  return (
    <div className='App'>
      <InputContainer onSave={saveDataHandler} />
      <OutputContainer recordCount={records.length} />
    </div>
  );
}

export default App;
