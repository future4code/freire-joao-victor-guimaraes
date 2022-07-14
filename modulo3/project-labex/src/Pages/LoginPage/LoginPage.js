import React from "react";
import { useNavigate } from "react-router-dom"
import { goBack } from "../../Routes/Coordinator";

export function LoginPage() {
    const navigate = useNavigate();
    




    return (
        <div>
            <p>Area login</p>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button>Login</button>

        </div>
    )

}
