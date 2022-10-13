import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ChooseCards from "../pages/CardPage/CardPage"
import ErrorPage from "../pages/ErrorPage/ErroPage"


const Router = ()=>{
return(
<BrowserRouter>
<Routes>
<Route index element={<HomePage/>}/>
<Route path="choose-card" element={<ChooseCards/>}/>
<Route path="*" element={<ErrorPage/>}/>
</Routes>
</BrowserRouter>
)
}
export default Router