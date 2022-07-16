import React from 'react';
import { CardDiv } from './styled';

export  function CardTrip(props) {
    return(
        <CardDiv>
            <p><strong>Nome:</strong> {props.name}</p>
            <p><strong>Planeta:</strong> {props.planet}</p>
            <p><strong>Duração:</strong> {props.duration} <strong>Dias</strong></p>
            <p><strong>Data:</strong> {props.date}</p>
            <p><strong>Descrição:</strong>  {props.description}</p>
        </CardDiv>
    )
}