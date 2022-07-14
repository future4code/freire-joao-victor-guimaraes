// import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goBack, goToApplicationPage } from "../../Routes/Coordinator";
// import { URL_BASE } from "../../Constantes/URL_BASE";
// import axios from 'axios';
import { CardTrip } from "../../Component/CardTrip/CardTrip";
import { useRequestData } from "../../Hooks/useRequestData";

export function ListTripPage() {

    const navigate = useNavigate();

    const todasTrips = useRequestData()

    const listTrips = todasTrips.map((trip) => {
        return <CardTrip key={trip.id}
            name={trip.name}
            description={trip.description}
            planet={trip.planet}
            duration={trip.durationInDays}
            date={trip.date}
        />
    })

    return (
        <div>
            <p>Area Viagens</p>

            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationPage(navigate)}>Inscrever-se</button>
            <div>{listTrips}</div>

        </div>
    )

}