import styled from "styled-components"
import image from "../../assets/bg-card.jpg"

export const StyledMain = styled.main`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: auto;
background-color: whitesmoke;
`

export const ContainerCards = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-image: url(${image});
margin: 10px;
width:195px;
height: 400px;
border-radius: 30px;
box-shadow: 5px 5px 5px black
`

export const StyledImg = styled.img`
padding-top:15px
`
export const TextStyle = styled.h4`
font-style: italic;
color: whitesmoke;
`