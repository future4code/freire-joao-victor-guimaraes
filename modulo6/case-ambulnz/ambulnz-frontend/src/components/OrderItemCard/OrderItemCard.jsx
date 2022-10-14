import { ListCart } from "./Styles";

const OrderItemCard = (props) => {
  const {pizza,removeToCart}=props
  return (
    <ListCart>
      <h3>Pizza {pizza.name} -  {pizza.price.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })} x {pizza.quantity}</h3>
          
      <button onClick={()=>removeToCart(pizza)}>Remover Item</button>
    </ListCart>
  );
};
export default OrderItemCard;
