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
    detailName:null,
    detailImage:null
   
  })

 

  return (
    <Container>
      {card.map((card, index) => {
        return (
          <ContainerCards key={card.name}>
             {/* <DetailPopUp CardDetail={card}/> */}
             
            <FlipCard onClick={()=> {setDetailCard({isActive:true, detail:{state:card}})}} key={card.name} >
            
              <FaceCard className="cardFaceFront">
                <img src={`${imagePath}${card?.image}`} alt={`${card?.name}`} />
                <TextStyle>{card.name}</TextStyle>
              </FaceCard>

              <BackCard className="cardFaceBack">
                <img src={`${backCard}`} alt={`${card?.name}`} />
              </BackCard>
            </FlipCard>
            {/* {AState.isActive && <DetailPopUp  key={card.name}/>} */}
            
          </ContainerCards>
          
        );
      })}
    </Container>
  );
};
export default Card;
