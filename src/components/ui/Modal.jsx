import "../../styles/ui/Modal.scss";
import React from "react";
import ReactDom from "react-dom";

const Modal = ({ showModal = false, children }) => {
  if (!showModal) return null;

  return ReactDom.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
