import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  goToListTripPage, goToLoginPage } from "../../Routes/Coordinator"


export function HomePage() {
    const navigate = useNavigate();



    return (
        <div>
            <p>Home</p>

            <button onClick={()=>goToListTripPage(navigate)}>Ver Viagens</button>

            <button onClick={()=>goToLoginPage(navigate)}>Área Admin</button>
        </div>

    )
}