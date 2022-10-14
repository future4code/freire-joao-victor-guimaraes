import { ModalContainer, Modal } from "./Styles";

const PopupSucessOrder = (props) => {
  const { order, closePopup } = props;

  return (
    <ModalContainer>
      <Modal>
        <h1>Pedido realizado com sucesso!</h1> <button onClick={closePopup}>X</button>
        <h2 className="id-order-h2">Id do pedido:</h2> <p className="id-order-p">{order.id}</p>
        <hr />
        {order.pizzas.map((pizza) => {
            return <p key={pizza.name}>
          
            Pizza {pizza.name} -{" "}
            {pizza.price.toLocaleString("na-us", {
              style: "currency",
              currency: "USD",
            })}{" "}
            x {pizza.quantity}
          </p>;
        })}
        <hr/>
        <p>
          Total Pago:{" "}
          {order.total.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </Modal>
    </ModalContainer>
  );
};
export default PopupSucessOrder;
