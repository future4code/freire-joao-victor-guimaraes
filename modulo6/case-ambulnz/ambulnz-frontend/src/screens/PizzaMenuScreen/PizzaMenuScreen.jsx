import axios from "axios";
import { useEffect, useState } from "react";
import Pizzacard from "../../components/PizzaCard/PizzaCard";
import { BASE_URL } from "../../constants";
import { ContainerSection } from "./Styles";

const PizzaMenuScreen = () => {
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
          return <Pizzacard pizza={pizza} key={pizza.name} />;
        })}
      </ul>
    </ContainerSection>
  );
};
export default PizzaMenuScreen;
