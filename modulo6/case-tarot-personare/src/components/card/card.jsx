import { useContext } from "react";
import {
  ContainerCards,
  Container,
  
  TextStyle,
  FaceCard,
  BackCard,
  FlipCard,
} from "./styled";
import { CardContext } from "../../context/cardContext";

const Card = () => {
  const { tarotJson,card, backCard, imagePath,flip,handleCardFlip } = useContext(CardContext);

  return (
    <Container>
      <header>
      <h1>
        {flip 
        ? 'Clique em iniciar o jogo para virar as cartas' 
        : 'Passe o mouse para virar uma carta'}
      </h1>
      {flip ? <button onClick={handleCardFlip}>Iniciar o Jogo</button> : ''}
      </header>
      
        
      {card.map((card, index) => {
        return (
          <ContainerCards key={index}>
            <FlipCard data-html={true}
              data-tip={
                card.open
                  ? `<p style="text-align: center; padding-bottom: .4rem;">${card.name}</p><p>lorem lorem lorem lorem</p>`
                  : 'Clique aqui para ver a carta'
              } className={`card ${flip ? "is-flipped":""}`}>
              <FaceCard className="cardFaceFront">
                <img
                  src={`${imagePath}${card?.image}`}
                  alt={`${card?.name}`}
                />
                <TextStyle>{tarotJson}</TextStyle>
              </FaceCard>

              <BackCard className="cardFaceBack">
                <img src={`${backCard}`} alt={`${card?.name}`} />
              </BackCard>
            </FlipCard>
          </ContainerCards>
        );
      })}
    </Container>
  );
};
export default Card;
