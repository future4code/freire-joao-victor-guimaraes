import OrderItemCard from "../../components/OrderItemCard/OrderItemCard";
import { SectionContainer, Button , CartPrice} from "./styles";

const OrderSumaryScreen = (props) => {
  const { cart, removeToCart, addToCart, orderConfirm, total } = props;
  return (
    <SectionContainer>
      <h1>Resumo do pedido</h1>

      {cart.map((pizza) => {
        return (
          <OrderItemCard
            key={pizza.name}
            pizza={pizza}
            addToCart={addToCart}
            removeToCart={removeToCart}
          />
        );
      })}

      <CartPrice>
        <span>Total:</span>
        <span>
          {total.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </CartPrice>
      <Button className="button-order" onClick={orderConfirm}>
        Confimar pedidos
      </Button>
    </SectionContainer>
  );
};
export default OrderSumaryScreen;
