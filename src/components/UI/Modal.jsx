import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalAlert = (props) => {
  const [isOpen, setIsOpen] = useState(props.boolean);

  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
      <Modal isOpen={isOpen} className="Modal">
        <h3>{props.content}</h3>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ModalAlert;
