import './App.css';
import React from "react";

import TelaInicial from './Components/TelaInicial';
import TelaDetalhes from './Components/TelaDetalhes';






export default class App extends React.Component {

  state = {
    TrocarTela: true
  }


mudarTela = () =>{
  this.setState({TrocarTela: !this.state.TrocarTela})
  

}
  render() {
   const mudarTela = this.state.TrocarTela? <TelaInicial/>:<TelaDetalhes/>
    return (
      <div className='App'>
        <button onClick={this.mudarTela}>Trocar Tela</button>

        <br/>
        <br/>
        <hr/>
        {mudarTela}
      
        

      </div>
    )
  }
}
