import React from "react";
import {useNavigate} from "react-router-dom"


export function LoginPage(){
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/");
    }



    return(
        <div>
            <p>Area login</p>
            <button onClick={goBack}>Voltar</button>
            <button>Login</button>

        </div>
    )

}
