import { useEffect, useState } from "react";
import Pizzacard from "./components/PizzaCard";
import { BASE_URL } from "./constants";
import axios from "axios"

function App() {
  const [pizzas, setPizzas] = useState([])
const getPizzas =()=>{
  const results=  axios.get(`${BASE_URL}/pizzas`)
  .then((res)=>{
    setPizzas(res.data.pizzas)
  }).catch((err)=>{
    console.log(err)
  })
  return results
}
useEffect(()=>{
  getPizzas()
})


  return (
    <div >
      {pizzas.map((pizza)=>{
        return(
 <Pizzacard pizza={pizza} key={pizza.name} />
 
 
        )
      })}
   
    </div>
  );
}

export default App;
