import { useNavigate } from "react-router-dom";
import { goToBack } from "../../router/coordinator";
import { Container } from "./styles";
import { Button } from "../../components/HeaderCard/styles";
import NotFound from "../../assets/erro-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => goToBack(navigate)}>De 1/2 volta</Button>
      <img src={NotFound} alt="Pagina não encontrada" />
    </Container>
  );
};
export default ErrorPage;
