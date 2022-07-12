import React from 'react';
import {useNavigate} from 'react-router-dom';



export function HomePage() {
    const navigate = useNavigate()
    
    const goToListTrip = () => {
        navigate("/ListTrip");
    }

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <p>Home</p>
            <button onClick={goToListTrip}>Lista de Viagens</button>
            <button onClick={goToLogin}>Área Admin</button>
        </div>

    )
}