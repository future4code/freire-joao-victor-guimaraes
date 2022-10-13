// import { useNavigate } from "react-router-dom";

import { useContext } from "react";


import { CardContext } from "../../context/cardContext";
import { Modal, ModalContainer, Modalseg } from "./styles";
const DetailPopUp = (props) => {
  const { imagePath } = useContext(CardContext);
  const { card,closePopUp } = props;
  const { name, image } = card;

  

  return (
    <>
      <ModalContainer className="modal-container">
        <Modal className="modal">
          <h2>Sua carta escolhida foi: {name}</h2>
          <Modalseg>
            <img src={`${imagePath}${image}`} alt={name} />
            <div className="Scroll-text">
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
            </div>
          </Modalseg>
          <button onClick={() => window.location.reload(true)}>voltar</button>
        </Modal>
      </ModalContainer>
    </>
  );
};
export default DetailPopUp;
