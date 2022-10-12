import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../router/coordinator"
import { Head,Button } from "./styles"



const HeaderCard=()=>{
const navigate = useNavigate()
return(
    <Head>
        <Button onClick={()=>goToHomePage(navigate)}>Home</Button>
        <h1>Mentalize.&nbsp;&nbsp;&nbsp;Aquilo que quer deseja saber!</h1>
        <Button onClick={()=>window.location.reload(true)}>Embaralhar</Button>
    </Head>
)
}
export default HeaderCard