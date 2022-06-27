
import './App.css';
// import styled from 'styled-components';
import React from "react";
// import Mensagens from "./components//Mensagens";
class App extends React.Component{

    state = {
        Mensagens: [
            {
              remetente: "",
               mensagem: ""
            }
        ],
        valorInputRemetente: "",
        valorInputMensagem: ""
    }
    addMensagem = () => {
        const novaMensagem = {
            remetente: this.state.valorInputRemetente,
            mensagem: this.state.valorInputMensagem

        };

        const novasMensagens = [this.state.Mensagens, novaMensagem];

        this.setState({ Mensagens: novasMensagens });
        this.setState({ valorInputMensagem: "", valorInputRemetente: "" });

    };
    onChangeInputRemetente = (event) => { this.setState({ valorInputRemetente: event.target.value }) };
    onChangeInputMensagem = (event) => { this.setState({ valorInputMensagem: event.target.value }) };





render() {
  const mensagem = this.state.Mensagens.map((mens) => {
    return (
        <p> {mens.mensagem}    </p>     
    );   
});

const remetente = this.state.Mensagens.map((mens) => {
  return (
       <b>    {mens.remetente}     </b>        
  );

  
});

return <div className='container'>
        <div className='containerDiv'>
        
            <div className='containerMensagens'>
             <div>{remetente}{mensagem}</div>
                
            </div>
            
            <form>
                <input className='remetente' value={this.state.valorInputRemetente} onChange={this.onChangeInputRemetente} placeholder={" Remetente"} ></input>
                <input className='mensagem' value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} placeholder={" Mensagem"} ></input>
                <button className='botaoEnviar' onClick={this.addMensagem}> Send </button>

            </form>
        </div>
        
    </div>

}
}
export default App;
