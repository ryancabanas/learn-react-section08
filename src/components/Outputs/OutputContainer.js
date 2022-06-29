import styles from './OutputContainer.module.css';
import Record from './Record';

const OutputContainer = props => {
  return (
    <div
      className={`${styles.OutputContainer} ${
        !props.recordCount && styles.hidden
      }`}
    >
      <ul id={styles.override}>
        {props.records.map(record => {
          return (
            <Record
              key={record.key}
              username={record.username}
              age={record.age}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default OutputContainer;
