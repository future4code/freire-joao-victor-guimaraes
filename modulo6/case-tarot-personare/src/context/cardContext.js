import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CardContext = createContext();

const GlobalProvider = ({ children }) => {
 
  const [ card, setCard ]= useState([]);
  const [path, setPath] = useState([]);
  useEffect(() => {
    getCard();
    getPaths();
  },[]);
  
  

  const shuffleCards=(arr)=>{
    const newArr = arr.slice()
    for (let i = arr.length - 1; i > 0; i--) {
        const shuffling = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[shuffling]] = [newArr[shuffling], newArr[i]];
    }
    return newArr
  }

  const getCard =async () => {
    try {
     const res = await axios.get('/tarot.json');
      const shufflingCards = shuffleCards(res.data.cards)
      setCard(shufflingCards)
    } catch (error) {
      console.log(error)
    }
    

    return card
  };

  const getPaths = async () => {
    const res = await axios.get('/tarot.json');
    setPath(res.data);
  };
  
  const imagePath = path.imagesUrl
  const backCard = path.imageBackCard
  return (
    <CardContext.Provider value={{ card, path, imagePath, backCard }}>
      { children }
    </CardContext.Provider>
  );
};
export default GlobalProvider;
