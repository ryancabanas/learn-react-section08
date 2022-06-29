import './App.css';
import { useState } from 'react';
import InputContainer from './components/Inputs/InputContainer';
import OutputContainer from './components/Outputs/OutputContainer';
import GenericModal from './components/Modals/GenericModal';

function App() {
  const [records, setRecords] = useState([]);
  const [id, setId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const saveDataHandler = data => {
    setId(prevId => prevId + 1);
    const newData = { key: id, ...data };

    setRecords(prevRecords => {
      const list = [...prevRecords];
      list.unshift(newData);
      return list;
    });
  };

  const closeModalHandler = () => setShowModal(false);
  const showModalHandler = message => {
    setModalMessage(message);
    setShowModal(true);
  };

  return (
    <div className='App'>
      <InputContainer onSave={saveDataHandler} onShowModal={showModalHandler} />
      <OutputContainer recordCount={records.length} records={records} />
      <GenericModal
        show={showModal}
        onClose={closeModalHandler}
        message={modalMessage}
      />
    </div>
  );
}

export default App;
