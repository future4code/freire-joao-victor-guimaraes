

import './App.css';
import { useRequestData, useSprites, useName, useAllpokemons } from './Constante/useRequestData';

function App() {
 const data = useRequestData();
 const sprites = useSprites();
//  const name = useName();
 const pkms = useAllpokemons();

const nteta = data.map((abilities,key)=> <li key={key}>{abilities.ability.name}</li> ) 
const allpkms = pkms.map((pkms,key) => <p key={key}>{pkms.name}</p> )




// const teste = sp

  return (
    <div className="App">


     
  
    <img src={sprites} alt=''/>
      
    {nteta}
    {allpkms}
    </div>
  );
}

export default App;
