import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 28em;
  font-family: Lato;
  border-left: 2px solid lightgray;
  text-align: center;
  color:#f5f3ef;
  
  h1 {
   margin: 20px 0 20px 0;
        font-size: 2em;
    text-align: center;
  }
  .button-order{
    margin-left: 95px;
  
  }
  `;

export const Button = styled.div`

display: flex;
  align-items: center;
  justify-content: center;
width: 200px;
height: 38px;
cursor:pointer;
margin-top:10px;
box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.55);
border-radius: 18px;
background-color: #FFAA2C;
color:white;
font-weight: 900;
:active{
background-color:#48d05f;

    transition: all ease .2s;;
}
`
export const CartPrice = styled.div`
    
    display: flex;
    justify-content: space-between;
    font-weight:900;
    font-size: 1.4em;
    
`
