
import './App.css';
import Card from './components/card/card.jsx';
import GlobalProvider from './context/cardContext';


function App() {






  return (
    <GlobalProvider >
      <Card/>
    </GlobalProvider>
  );
}

export default App;
