import { useState, useEffect, createContext } from "react";
import axios from "axios";
// import tarotJson from "../../public/tarot.json";
// const teste = tarotJson.cards.map((card) => {
//   return {
//     ...card,
//     open: true,
//   };
// });
export const CardContext = createContext();

const GlobalProvider = ({ children }) => {
 
  const [ card, setCard ]= useState([]);
  const [path, setPath] = useState([]);
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    getCard();
    getPaths();
  });
  
  const getCard = async () => {
    const res = await axios.get('/tarot.json');
    setCard(res.data.cards);
  };

  const shufflingCards=(arr)=>{
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
 

  

  const getPaths = async () => {
    const res = await axios.get('/tarot.json');
    setPath(res.data);
  };
  const handleCardFlip = () => {
    setFlip(!flip);
    shufflingCards(tarotJson)
  };
  const imagePath = path.imagesUrl
  const backCard = path.imageBackCard
  return (
    <CardContext.Provider value={{tarotJson, card, path, imagePath, backCard, flip, handleCardFlip }}>
      { children }
    </CardContext.Provider>
  );
};
export default GlobalProvider;
