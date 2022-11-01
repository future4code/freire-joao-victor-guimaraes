import axios from "axios";
import { useEffect, useState } from "react";
import Pizzacard from "../../components/PizzaCard/PizzaCard";
import { BASE_URL } from "../../constants/constants"
import { ContainerSection } from "./Styles";

const PizzaMenuScreen = (props) => {
  const {addToCart} = props

  const [pizzas, setPizzas] = useState([]);

  const getPizzas = () => {
    const results = axios
      .get(`${BASE_URL}/pizzas`)
      .then((res) => {
        setPizzas(res.data.pizzas);
      })
      .catch((err) => {
        console.log(err);
      });
    return results;
  };
  useEffect(() => {
    getPizzas();
  });

  






  return (
    <ContainerSection>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizzacard 
          key={pizza.name} 
          pizza={pizza} 
          addToCart={addToCart}
          />;
        })}
      </ul>
    </ContainerSection>
  );
};
export default PizzaMenuScreen;
