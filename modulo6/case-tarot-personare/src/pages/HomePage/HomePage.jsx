import { useNavigate } from "react-router-dom"
import { goToCards } from "../../router/coordinator"


const HomePage = ()=>{
const navigate = useNavigate()
return(
    <>
    <h1>Tarot Diario</h1>
    
    
    <botao onClick={()=>goToCards(navigate)}>Veja sua previsão!</botao>
    
    </>
)
}
export default HomePage