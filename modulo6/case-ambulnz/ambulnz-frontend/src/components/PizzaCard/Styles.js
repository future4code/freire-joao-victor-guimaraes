import styled from "styled-components";
import pizzaBufala from "../../assets/bufala.jpg"
import pizzaBianca from "../../assets/pizza-Bianca.png" 
import pizzaMagherita from "../../assets/pizza-magherita.png"
import pizzaRomana from "../../assets/pizza-romana.png"
import pizzaDiavola from "../../assets/pizza-diavola.jpg"




export const ListCard = styled.li`
flex-wrap:wrap;
font-family: Lato;
box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.55);
background: #ffffff;
  display: flex;
  margin: 1em;
  border: 1px solid #F5F3EF;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  width: 275px;
  height: 304px;
  text-align: center;
 
  .card-price{

    color:#FD5C2E;
    font-weight:bolder;
  }
  h3{
    font-weight:bold;
    line-height: 15px;
  }
  .card-ingredients{
    padding: 5px;
    color: #969AB0;
  font-size:15px
  }
  .card-image{
    width:200px;
    align-self: center;
  }
 

`;
export const Button = styled.div`
position: relative;
width: 101px;
height: 38px;
top: 20px;
left: 90px;
text-align: center;
padding-top:10px;
box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.55);
border-radius: 18px;
background-color: #FFAA2C;
color:white;
cursor:pointer;
font-weight: 900;
:active{
background-color:#FD5C2E;

}
`
export const ImgPizza = styled.img.attrs(props => ({
  src: imagRes(props.Img),

}))`
`;
const imagRes=(src)=>{
  switch (src) {
          case "Bufala":
            return pizzaBufala;
          case "Diavola":
            return pizzaDiavola;
          case "Margherita":
            return pizzaMagherita;
          case "Pizza Bianca":
            return pizzaBianca;
          case "Romana":
            return pizzaRomana;
          
          default:
        }
}
