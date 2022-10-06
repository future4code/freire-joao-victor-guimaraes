function Pizzacard(props) {
  const { pizza } = props;

  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.price} </p>
      <p>{pizza.ingredients}</p>
      <button>Add Cart</button>
    </div>
  );
}
export default Pizzacard;
