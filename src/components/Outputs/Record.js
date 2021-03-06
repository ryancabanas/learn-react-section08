import styles from './Record.module.css';

const Record = props => {
  return (
    <li>
      <div>
        <div className={styles.inner}>
          <div>{`${props.username} (${props.age} years old)`}</div>
        </div>
      </div>
    </li>
  );
};

export default Record;
