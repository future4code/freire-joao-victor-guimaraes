import OrderItemCard from "../../components/OrderItemCard/OrderItemCard";
import { SectionContainer } from "./styles";

const OrderSumaryScreen = (props) => {
  const {cart,removeToCart,orderConfirm,total} = props
  return (
    <SectionContainer>
      <h1>Resumo do pedido</h1>
      
      {cart.map((pizza)=>{
        return<OrderItemCard 
        key={pizza.name}
        pizza={pizza}
        removeToCart={removeToCart}
        />
      })}
      
      
      <h2>Total:  {total.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}</h2>
      <button onClick={orderConfirm}>Confimar pedidos</button>
    </SectionContainer>
  );
};
export default OrderSumaryScreen;
