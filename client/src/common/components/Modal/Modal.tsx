import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ModalOverlay, ModalWrapper } from "./Modal.styles";

type Props = {
  children: ReactNode;
  handleClose: () => void;
};
const Modal = ({ children, handleClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  //   useClickOutside(modalRef, handleClose);

  return createPortal(
    <>
      <ModalOverlay>
        <ModalWrapper ref={modalRef}>{children}</ModalWrapper>
      </ModalOverlay>
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
