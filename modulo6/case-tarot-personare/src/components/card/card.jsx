import { useContext } from "react";
import { ContainerCards, StyledMain, StyledImg, TextStyle } from "./styled";
import { CardContext } from "../../context/cardContext";

const Card = () => {
  const { card, backCard, imagePath,flip } = useContext(CardContext);

  return (
    <StyledMain>
      {card.map((card, index) => {
        return (
          <ContainerCards key={index}>
            <div data-hmtl={true} data-tip={`${card.name}`} >
              <StyledImg
                src={`${imagePath}${card?.image}`}
                alt={`${card?.name}`}
              />

              <TextStyle>{card?.name}</TextStyle>
            </div>
            <StyledImg src={`${backCard}`} alt={`${card.name}`} />
          </ContainerCards>
        );
      })}
    </StyledMain>
  );
};
export default Card;
