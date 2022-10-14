import {  ListCard } from "./Styles";

function Pizzacard(props) {
  const { pizza } = props;

  return (
    
      <ListCard>
        <h3>{pizza.name}</h3>
        <p className="card-price">
          {pizza.price.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}{" "}
        </p>
        <p className="card-ingredients">
          {pizza.ingredients.map((item) => {
            return <span>{`${item} `}</span>;
          })}
        </p>
        <button>Add Cart</button>
      </ListCard>
   
  );
}
export default Pizzacard;
