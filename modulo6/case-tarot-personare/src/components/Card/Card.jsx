import { useContext,useState } from "react";
import {
  ContainerCards,
  Container,
  TextStyle,
  FaceCard,
  BackCard,
  FlipCard,
} from "./styles";
import { CardContext } from "../../context/cardContext";
import DetailPopUp from "../DetailPopUp/DetailPopUp";


const Card = () => {
  const { card, backCard, imagePath } = useContext(CardContext);
  const [AState, setDetailCard]=useState({
    isActive:false, 
    popUp:null
   
  })

 const closePopUp =()=>{
  setDetailCard({
    isActive:false, 
    popUp:null
   
  })
 }

  return (
    <Container>
      {card.map((card) => {
        const {name,image}=card
        return (
          <ContainerCards key={card.name} >
             
            <FlipCard className="Flip" onClick={()=>{setDetailCard({isActive:true, popUp:card})}} key={card.name}>  
              <FaceCard className="cardFaceFront">
                <img src={`${imagePath}${image}`} alt={`${name}`} />
                <TextStyle>{name}</TextStyle>
              </FaceCard>
              <BackCard className="cardFaceBack">
                <img src={`${backCard}`} alt={`${backCard}`} />
              </BackCard>
            </FlipCard>
          </ContainerCards>
        );
      })}

      {
      AState?.isActive && 
      <DetailPopUp 
      card={AState.popUp} 
      closePopUp={closePopUp}
      key={card?.name}
      />
      }
      
    </Container>
  );
};
export default Card;
