import React from 'react';

import './CardPequeno'
import styled from 'styled-components';

const ContainerDiv = styled.div`

display: flex;
    align-items: center;
    justify-items:start;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
    padding-right: 21vw;
}
`
const DivContainer = styled.div`

    display: flex;
    justify-items: end;
}
`
const IconeImg = styled.img`
width: 30px;
    margin-right: 10px;
`


export default function CardPequeno(props) {
    return (
        <ContainerDiv >
            <IconeImg src={props.imagem} alt="" />
            
            <DivContainer>
               
                <p><b>{props.campo}</b>  {props.atributo}</p>

            </DivContainer>
        </ContainerDiv>
    )
}
