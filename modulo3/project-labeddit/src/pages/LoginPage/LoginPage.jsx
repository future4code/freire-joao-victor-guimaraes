import React from 'react'
import {useNavigate} from 'react-router-dom';
import { goToCadastroPage,goToFeedPage } from '../../routes/coordinator';

export const LoginPage = ( ) => {
const navigate = useNavigate();




    return (
        <div>
            <h1>Login page</h1>
            <input placeholder='E-mail' type="email"/>
            <input placeholder='Password' type="password"  />
         <button onClick={()=> goToFeedPage(navigate)}>Entrar</button>
         <hr/>
         <button onClick={()=> goToCadastroPage(navigate)}>Crie uma conta!</button>
        </div>


    )

}

