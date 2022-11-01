import axios from "axios";
import { useEffect, useState } from "react";
import PopupSucessOrder from "./components/PopupSucessOrder/PopupSucessOrder";
import { BASE_URL } from "./constants/constants";
import OrderSumary from "./screens/OrderSummaryScreen/OrderSumaryScreen";
import PizzaMenu from "./screens/PizzaMenuScreen/PizzaMenuScreen";
import { MainCointainer } from "./Styles";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sucessOrderPopup, setSucessOrderPopup] = useState({
    isActive: false,
    summary: {
      id: null,
      pizzas: null,
      total: null,
    },
  });
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const addToCart = (pizzaAdd) => {
    const indexFound = cart.findIndex((pizzaInCart) => {
      return pizzaInCart.name === pizzaAdd.name;
    });

    if (indexFound >= 0) {
      const newCart = [...cart];

      newCart[indexFound].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart];
      const newPizza = {
        name: pizzaAdd.name,
        price: pizzaAdd.price,
        quantity: 1,
      };
      newCart.push(newPizza);
      setCart(newCart);
    }
  };
  const removeToCart = (pizzaRemove) => {
    if (pizzaRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaRemove.name) {
          pizza.quantity -= 1;
        }
        return pizza;
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaRemove.name;
      });
      setCart(newCart);
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total);
  };
  const orderConfirm = async () => {
    try {
      const body = {
        pizzas: cart
      };
      const res = await axios.post(`${BASE_URL}/orders`, body);
      setSucessOrderPopup({
        isActive: true,
        summary: res.data.order
      });
      
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };

console.log()
  const closePopup = () => {
    setSucessOrderPopup({
      isActive: false,
      summary: {
        id: null,
        pizzas: null,
        total: null,
      },
    });
  };

  return (
    <MainCointainer>
      <PizzaMenu addToCart={addToCart} />
      <OrderSumary
        cart={cart}
        removeToCart={removeToCart}
        addToCart={addToCart}
        orderConfirm={orderConfirm}
        total={total}
      />

      {sucessOrderPopup.isActive && 
        <PopupSucessOrder
          order={sucessOrderPopup.summary}
          closePopup={closePopup}
        />
       
      }
      
    </MainCointainer>
  );
}

export default App;
