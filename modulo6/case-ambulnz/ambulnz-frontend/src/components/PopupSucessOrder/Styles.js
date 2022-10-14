import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  position: absolute;
  background: whitesmoke;
  width: 480px;
  min-height: 100px;
  padding: 10px;
  align-items: center;
  border-radius: 12px;
 
  @media (max-width: 500px) {
    width: 60%;
    height: 50%;
  }
  .id-order-h2,
  .id-order-p{
    display: inline;
  }


  h1{
    display: inline;
  }
  button{
    display: inline;
    width:1em;
    margin:1em;
  }
`;

export const Modalseg = styled.div`
  display: flex;
  `;