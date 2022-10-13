


import GlobalProvider from './context/cardContext';
import Router from './router/Router';
import { GlobalStyle } from './styles';


function App() {






  return (
    <GlobalProvider >
      <GlobalStyle/>
      <Router/>
    </GlobalProvider>
  );
}

export default App;
