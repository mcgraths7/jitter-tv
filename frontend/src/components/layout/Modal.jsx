import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  return createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">{children}</div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
