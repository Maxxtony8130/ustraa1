import { Button } from "@material-ui/core";
import React from "react";
import Modal from "react-bootstrap/Modal";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Mollitia quam harum hic non. Corporis,
          id assumenda laboriosam et, ratione cum optio perspiciatis dolorem
          laudantium ut, accusamus totam. Nulla ut qui numquam id? Recusandae ut
          aliquid sit velit maxime sequi officia tempora impedit quaerat.
          Reiciendis, possimus dolor vitae alias qui fugit vel nesciunt a sequi
          doloremque inventore mollitia ducimus voluptates!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Nav() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Nav;
