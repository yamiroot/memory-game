import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ModalGame = ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    animation
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Fin del juego
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5 className="text-center">¡Felicidades!</h5>
      <p className="text-center">
        Logró encontrar todas las cartas pares.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Link to="/">
        <Button onClick={onHide} variant="warning">Volver a jugar</Button>
      </Link>
    </Modal.Footer>
  </Modal>
);


ModalGame.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};


export default ModalGame;

/* function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />); */
