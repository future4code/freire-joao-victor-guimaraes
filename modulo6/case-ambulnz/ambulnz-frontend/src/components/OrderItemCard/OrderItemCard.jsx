import { ListCart, QtdArea } from "./Styles";

const OrderItemCard = (props) => {
  const {pizza,removeToCart,addToCart}=props
  return (
    <ListCart>
      <h3>Pizza {pizza.name} -  {pizza.price.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })} </h3>
          <QtdArea>
      <button className="button" onClick={()=>removeToCart(pizza)}>-</button>
      <span>{pizza.quantity}</span>
      <button className="button" onClick={()=>addToCart(pizza)}>+</button>
      </QtdArea>
    </ListCart>
  );
};
export default OrderItemCard;
