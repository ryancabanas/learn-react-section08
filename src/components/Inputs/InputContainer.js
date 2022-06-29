import { useState } from 'react';
import styles from './InputContainer.module.css';

const InputContainer = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameHandler = event => {
    setUsername(event.target.value);
  };

  const ageHandler = event => {
    setAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (username && age) {
      const savedData = {
        username: username,
        age: age
      };

      props.onSave(savedData);

      setUsername('');
      setAge('');
    }
  };

  return (
    <form className={styles.InputContainer} onSubmit={submitHandler}>
      <label>Username</label>
      <input value={username} onChange={usernameHandler} />
      <label className={styles.label}>Age (Years)</label>
      <input value={age} onChange={ageHandler} />
      <button type='submit'>Add User</button>
    </form>
  );
};

export default InputContainer;
