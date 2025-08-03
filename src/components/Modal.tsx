import {useNavigate} from 'react-router-dom';

import classes from './Modal.module.css';
import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate('..');
  };

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={closeHandler}
      />
      <dialog
        open
        className={classes.modal}
      >
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
