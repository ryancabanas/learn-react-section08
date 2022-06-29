import styles from './GenericModal.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

const GenericModal = props => {
  return (
    <>
      <Modal show={props.show} onHide={props.onClose} centered>
        <Modal.Header className={styles.header}>
          <Modal.Title>Invalid input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.message}</p>
        </Modal.Body>
        <div>
          <button
            type='button'
            className={styles.button}
            onClick={props.onClose}
          >
            Okay
          </button>
        </div>
      </Modal>
    </>
  );
};

export default GenericModal;
