import styled from "styled-components"
import image from "../../assets/bg-card-2.jpg"

export const Head = styled.header`
padding-top: 20px;
display: flex;
justify-content: space-around;
background-image:url(${image});
height: 100px;
`
export const Button = styled.button`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    font-weight: 700;
    font-style: none;
    color: whitesmoke;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    height: 40px;

&:after {
    content: "";
    background-color:(whitesmoke);
    width: 100%;
    z-index: -1;
    position:relative;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
    border-radius: 30px;
}

&:hover:after {
    top: 0px;
    left: 0px;
}`