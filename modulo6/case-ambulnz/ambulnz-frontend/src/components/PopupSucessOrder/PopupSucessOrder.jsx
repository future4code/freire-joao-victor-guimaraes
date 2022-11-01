import { ModalContainer, Modal,Divisor } from "./Styles";

const PopupSucessOrder = (props) => {
  const { order, closePopup } = props;

  return (
    <ModalContainer>
      <Modal>
        <h1>Pedido realizado com sucesso!</h1> 
        <spam className="close-popup" onClick={closePopup}>X</spam>
        <h2 className="id-order-h2">Id do pedido:</h2> <p className="id-order-p">{order.id}</p>
        <Divisor  />
        {order.pizzas.map((pizza) => {
            return <h3 key={pizza.name}>
          
            Pizza {pizza.name} -{" "}
            {pizza.price.toLocaleString("na-us", {
              style: "currency",
              currency: "USD",
            })}{" "}
            x {pizza.quantity}
          </h3>;
        })}
        <Divisor  />
        <h2>
          Total Pago:{" "}
          {order.total.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}
        </h2>
        
      </Modal>
      
    </ModalContainer>
  );
};
export default PopupSucessOrder;
