import React from 'react'
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {FeedPage} from '../pages/FeedPage/FeedPage'
import {PostPage} from '../pages/PostPage/PostPage'
import {ErrorPage} from '../pages/ErrorPage/ErrorPage'
import {CadastroPage} from '../pages/CadastroPage/CadastroPage'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

const Router = () =>{

return (
<BrowserRouter>
<Routes>
<Route index element={<LoginPage/>}/>
<Route path='cadastroPage' element={<CadastroPage/>}/>
<Route path='feedPage' element={<FeedPage/>}/>
<Route path='postPage' element={<PostPage/>}/>
<Route path='*' element={<ErrorPage/>}/>

</Routes>
</BrowserRouter>
)


} 
export default Router