import { useNavigate } from "react-router-dom"
import { goToCards,goToBack } from "../../router/coordinator"


const ErrorPage =()=>{
const navigate =useNavigate()

return(
    <>
    <p>Paginha não encontrada </p>
    <button onClick={()=>goToBack(navigate)}>aqui</button>
    
    </>
)

}
export default ErrorPage