import OrderSumaryScreen from "./screens/OrderSummaryScreen/OrderSumaryScreen";
import PizzaMenu from "./screens/PizzaMenuScreen/PizzaMenuScreen";
import { MainCointainer } from "./Styles";

function App() {
  

  return (
    <MainCointainer>
      <PizzaMenu/>
    <OrderSumaryScreen/>
    </MainCointainer>
  );
}

export default App;
