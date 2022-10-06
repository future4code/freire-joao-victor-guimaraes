import { useContext } from "react";
import {
  ContainerCards,
  Container,
  StyledImg,
  TextStyle,
  FaceCard,
  BackCard,
  FlipCard,
} from "./styled";
import { CardContext } from "../../context/cardContext";

const Card = () => {
  const { card, backCard, imagePath, flip } = useContext(CardContext);

  return (
    <Container>
      {card.map((card, index) => {
        return (
          <ContainerCards key={index}>
            <FlipCard className={`card ${flip ? "is-flipped":""}`}>
              <FaceCard className="cardFaceFront">
                <img
                  src={`${imagePath}${card?.image}`}
                  alt={`${card?.name}`}
                />
                <TextStyle>{card?.name}</TextStyle>
              </FaceCard>

              <BackCard className="cardFaceBack">
                <img src={`${backCard}`} alt={`${card.name}`} />
              </BackCard>
            </FlipCard>
          </ContainerCards>
        );
      })}
    </Container>
  );
};
export default Card;
