import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 20px;
  margin: 0 auto;
  z-index: 999;
  background-color: white;
`;
