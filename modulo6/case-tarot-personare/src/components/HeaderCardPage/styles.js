import styled from "styled-components"
import image from "../../assets/bg-card-2.jpg"

export const Head = styled.header`
padding-top: 20px;
display: flex;
justify-content: space-around;
background-image:url(${image});
height: 100px;
h1{
    color:white;
    text-shadow: 4px 6px 3px #272727;
}
`
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