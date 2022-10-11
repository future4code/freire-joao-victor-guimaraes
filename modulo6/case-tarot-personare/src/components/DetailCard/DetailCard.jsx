// import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { CardContext } from "../../context/cardContext";
const DetailPopUp = (props) => {
  const { imagePath } = useContext(CardContext);
  const { card } = props
  // const location = useLocation()
 

  const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Modal = styled.div`
   position: absolute;
    background: white;
    width: 450px;
    min-height: 400px;
    padding: 10px;
    img {
      size: 20%;
    }
  `;

  const Modalseg = styled.div`
    display: flex;
    p {
      margin: 10px;
    }
  `;

  return (
    <>
      <ModalContainer className="modal-container" key={card.name}>
        <Modal className="modal" key={card.name}>
          <h2>Sua carta escolhida foi: {card.state.name}</h2>
          <Modalseg>
            <img src={`${imagePath}${card.image}`} alt={card?.name} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, soluta! Fugiat, voluptatem reprehenderit! Ratione,
              suscipit accusantium modi, nobis soluta voluptatem mollitia ea
              totam quae doloribus commodi reiciendis earum consequuntur iure.
              Illum alias saepe commodi nulla voluptates labore aut corporis
              assumenda beatae rerum, quam magni neque dignissimos ratione
              dolorum vitae natus doloribus nam in pariatur, harum autem, eius
              itaque! Libero, rem. Laborum repellendus dicta possimus ab
              blanditiis magni? Veritatis, culpa? Quidem praesentium sit unde
              tempora impedit quam natus quis obcaecati expedita iusto,
              inventore dignissimos exercitationem, debitis molestias nulla
              nesciunt eos. Vitae?
            </p>
          </Modalseg>
          <button onClick={()=>window.location.reload(true)}>voltar</button>
        </Modal>
        
      </ModalContainer>
    </>
  );
};
export default DetailPopUp;
