import {useContext} from "react"
import {ContainerCards,StyleDiv,StyledImg, TextStyle} from "./styled"
import { CardContext  } from "../../context/cardContext"


const Card = ()=>{
const {card,backCard,imagePath}=useContext(CardContext)



return(
<StyleDiv>
{card.map((card,index)=>{
    return (
        
            <ContainerCards key={index}>
                <StyledImg src={`${imagePath}${card?.image}`}alt={`${card?.name}`}/>
                <TextStyle>{card?.name}</TextStyle>
            </ContainerCards>
       
    )
})}
    
</StyleDiv>
    )
}
export default Card