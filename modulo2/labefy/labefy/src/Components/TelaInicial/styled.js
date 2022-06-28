import styled from "styled-components";

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color:#545e55 ; 
`;


export const Head = styled.header`
  background: linear-gradient(90deg, rgba(48,80,58,1) 0%, rgba(38,79,39,1) 28%, rgba(0,0,0,1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
   align-items: center;
   padding: 10px 20px 10px 20px ;
   flex-wrap: wrap;
   border-bottom-right-radius: 50px;
   img{
    width: 160px;
    height: auto;

  }
 
`
export const CompHead = styled.div`

align-items: center;
 padding: 10px 20px 0 20px ;
  display: flex;
  font-size: 20px;
  color:darkgray;
 
  img{
    width: 30px;
  }
`
export const Body = styled.main`
  min-height: 80%;
  display: flex;
`
export const MenuLateral = styled.nav`
  flex-basis: 150px;
  background-color: #30503a;
  
 
  

`

export const PainelPlalist = styled.section`
 flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 2fr);
  row-gap: 20px;
  column-gap: 15px;
  margin: 15px;
  flex-flow: wrap;
  flex-flow: column;
  padding-right: 2%;

  /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    gap: 20px;
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    padding: 5px 25px; */

`
export const Footer = styled.footer`
  background: linear-gradient(90deg, rgba(48,80,58,1) 0%, rgba(38,79,39,1) 28%, rgba(0,0,0,1) 100%);
  border-top-right-radius: 50px;
  text-align: center;
  color: darkgray;
`
