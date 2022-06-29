import './App.css';
import { useState } from 'react';
import InputContainer from './components/Inputs/InputContainer';
import OutputContainer from './components/Outputs/OutputContainer';

function App() {
  let [records, setRecords] = useState([]);

  const saveDataHandler = data => {
    setRecords(prevState => {
      const list = [...prevState];
      list.unshift(data);
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
