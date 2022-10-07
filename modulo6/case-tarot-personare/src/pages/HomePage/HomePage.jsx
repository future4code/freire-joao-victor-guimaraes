import { useNavigate } from "react-router-dom";
import { goToCards } from "../../router/coordinator";
import bgHomePage from "../../assets/bg-card-2.jpg";
import { Container, StyleImg } from "../HomePage/styles";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        
      <img src={bgHomePage} alt="" />
        <h1>Tarot Diario</h1>
        <button onClick={() => goToCards(navigate)}>Veja sua previsão!</button>
        
          
        
      </Container>
    </>
  );
};
export default HomePage;
