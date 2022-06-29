import styles from './OutputContainer.module.css';

const OutputContainer = props => {
  return (
    <div
      className={`${styles.OutputContainer} ${
        !props.recordCount && styles.hidden
      }`}
    >
      This is the OutputContainer
    </div>
  );
};

export default OutputContainer;
