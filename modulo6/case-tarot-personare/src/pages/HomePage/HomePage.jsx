import { useNavigate } from "react-router-dom";
import { goToCards } from "../../router/coordinator";
import bgHomePage from "../../assets/bg-card-2.jpg";
import { Container,StyleImg,Button } from "../HomePage/styles";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
      <StyleImg>
        <h1>Tarot Diario</h1>
        <Button onClick={() => goToCards(navigate)}>Veja sua previsão!</Button>
        </StyleImg>
      <img src={bgHomePage} alt="" />
        
          
        
      </Container>
    </>
  );
};
export default HomePage;
