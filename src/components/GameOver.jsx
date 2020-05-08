function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fin del juego
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>¡Felicidades!</h5>
        <p>
          Logro encontrar todas las cartas pares. Y no olvide:
        </p>
        <p>
          "La memoria es el perfume del alma", George Sand.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Volver a jugar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
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

render(<App />);
