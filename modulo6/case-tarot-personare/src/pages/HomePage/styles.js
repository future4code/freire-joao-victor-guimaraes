import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 60px;
  background-color: #272727;
  img {
    border-radius: 50%;
    @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
  }
  
`;

export const StyleImg = styled.div`
  position: absolute;
  font-size: 32px;
  left: 40%;
  top: 135px;
  align-items: center;
  h1{color:whitesmoke}
  @media (max-width: 500px) {
    align-items: center;
    width: 20%;
    height: auto;
    top: 50px;
  }`;

export const Button = styled.button`
    
font:normal 24px Tahoma, Geneva, sans-serif;
font-style:normal;
color:#9E9FA0;
background:#0C1824;
border:0px solid #0C1824;
text-shadow:0px -1px 1px #9E9FA0;
box-shadow:2px 2px 5px #0C1824;
-moz-box-shadow:2px 2px 5px #0C1824;
-webkit-box-shadow:2px 2px 5px #9E9FA0;
border-radius:50px 50px 50px 50px;
-moz-border-radius:50px 50px 50px 50px;
-webkit-border-radius:50px 50px 50px 50px;
width:auto;
height: 60px;

cursor:pointer;
margin:0 auto;
}
&:active{
cursor:pointer;
position:relative;
top:2px;



`