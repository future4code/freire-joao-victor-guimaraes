import React from "react";
import {useNavigate} from "react-router-dom"


export function ListTripPage(){
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/");
    }
    const goToApplicationPage = () =>{
        navigate("/ApplicationForm/")
    }


    return(
        <div>
            <p>Area Viagens</p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationPage}>Inscrever-se</button>
           
        </div>
    )

}