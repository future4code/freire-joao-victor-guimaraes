import { useState, useEffect, createContext } from "react";
import axios from "axios";


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
  const getPaths = async () => {
    const res = await axios.get('/tarot.json');
    setPath(res.data);
  };
  const handleCardFlip = () => {
    setFlip(!flip);
  };
  const imagePath = path.imagesUrl
  const backCard = path.imageBackCard
  return (
    <CardContext.Provider value={{ card, path, imagePath, backCard, flip, handleCardFlip }}>
      { children }
    </CardContext.Provider>
  );
};
export default GlobalProvider;
