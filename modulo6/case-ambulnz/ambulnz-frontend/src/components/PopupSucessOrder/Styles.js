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
  font-family: "Lato";
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
  .id-order-p {
    display: inline-block;
  }

  h1,
  .close-popup {
    display: inline;
  }

  .close-popup {
    position: absolute;
    top:0;
    left:96%;
    transform: translateX(-100%);
    border-radius: 9px;
    padding:6px;
    margin:1px 18px;
    font-weight: 600;
    width: auto;
    :hover {
      cursor: pointer;
      font-weight: bold;
      color:#FD5C2E;
      background-color: lightgray;
    }
  }

  
 
`;

export const Modalseg = styled.div`
  display: flex;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background: linear-gradient(45deg, #969ab0 60%, #ffaa2c);
`;
