import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../router/coordinator"
import { Head,Button } from "./styles"



const HeaderCardPage =()=>{
const navigate = useNavigate()
return(
    <Head>
        <Button onClick={()=>goToHomePage(navigate)}>Home</Button>
        <h3>Mentalize! Aquilo que quer deseja saber.</h3>
        <Button onClick={()=>window.location.reload(true)}>Embaralhar</Button>
    </Head>
)
}
export default HeaderCardPage