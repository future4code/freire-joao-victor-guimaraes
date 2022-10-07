import styled from "styled-components";
import image from "../../assets/bg-card-2.jpg";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #272727;
  padding: 10px;
`;


export const ContainerCards = styled.article`
  width: 100px;
  height: 210px;
  margin:3px;
  perspective: 600px;
  
  .cardFaceFront {
    background-image: url(${image}); 
    background-size: auto;
    transform: rotateY( 180deg );
    flex-direction: column;
    border-radius: 13px;
    text-align: center;
    img {
        width:70%;
        padding-top: 10px;
    }
  }
  .cardFaceBack{
    img {
      width: 100%;
      height: 100%;
    }
  }

`;
export const FlipCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.2s;
  transform-style: preserve-3d;
  cursor: pointer;
  :active{
    transform: rotateY(180deg);
  }
`;

export const FaceCard = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility:hidden;
`;
export const BackCard = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;


export const TextStyle = styled.h4`
  margin: 0;
  text-align: center;
  font-style: italic;
  color: whitesmoke;
  text-shadow: 4px 6px 3px black; 
`;