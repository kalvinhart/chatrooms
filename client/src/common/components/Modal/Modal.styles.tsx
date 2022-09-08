import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalWrapper = styled.div`
  display: inline-block;
  padding: 20px;
  z-index: 999;
  background-color: white;
`;
