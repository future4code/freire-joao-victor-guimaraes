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
  min-height: 400px;
  padding: 10px;
  align-items: center;
  border-radius: 12px;
  img {
    margin: 5px;
    @media (max-width: 500px) {
      width: 120px;
      height: 70%;
    }
    
  }
  button{
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 12px;
    :hover{
      font-weight: bold;
      opacity: 0.8s;
    }
    }
  @media (max-width: 500px) {
    width: 60%;
    height: 50%;
  }
`;

export const Modalseg = styled.div`
  display: flex;
  p {
    margin: 10px;
  }
  top: 0;
  left: 0;
 
  @media (max-width: 500px) {
    p {
      font-size: small;
    }

    .Scroll-text {
      height: 250px;
      overflow: scroll;
    }
  }
`;
