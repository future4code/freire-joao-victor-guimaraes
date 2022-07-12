import React from "react";
import {useNavigate} from "react-router-dom"


export function ApplicationFormPage(){
    const navigate = useNavigate()

    const goBackTripList = () => {
        navigate("/ListTrip");
    }
   


    return(
        <div>
            <p>Inscreva-se para uma viagem</p>
            <button onClick={goBackTripList}>Voltar</button>
            <button >Enviar</button>
           
        </div>
    )

}