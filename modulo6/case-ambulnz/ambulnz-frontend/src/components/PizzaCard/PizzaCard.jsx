import { ListCard, Button, ImgPizza } from "./Styles";

function Pizzacard(props) {
  const { pizza, addToCart } = props;

  return (
    
      <ListCard>
        <ImgPizza className="card-image" Img={pizza.name} alt="" />

        <p className="card-price">
          {pizza.price.toLocaleString("na-us", {
            style: "currency",
            currency: "USD",
          })}{" "}
        </p>
        <h3>{pizza.name}</h3>
        <p className="card-ingredients">
          {pizza.ingredients.map((item) => {
            return <span>{`${item} `}</span>;
          })}
        </p>
        <Button onClick={() => addToCart(pizza)}>Add Cart</Button>
      </ListCard>
    
  );
}
export default Pizzacard;
