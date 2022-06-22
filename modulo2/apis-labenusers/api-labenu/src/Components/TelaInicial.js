import React from "react";
import axios from "axios";




export default class TelaInicial extends React.Component {
    state = {
        usuarioCadastrados: [],
        inputName: "",
        inputEmail: ""
    }

    handleNameValue = (event) => { this.setState({ inputName: event.target.value }) };
    handleEmailValue = (event) => { this.setState({ inputEmail: event.target.value }) };

    createUser = () => {
        const body = {
            name: this.state.inputName, email: this.state.inputEmail
        };


        const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
            {
                headers: {
                    Authorization: "joaoVictorVictoy-freire"
                }
            }

        );

        request
            .then((response) => {
                console.log(response.data)
                alert("Usuario adicionado")
            })
            .catch((error) => {
                console.log(error.message);
            });

    };



    render() {
        return (
            <div>

                <h2>Cadastrar Usuários</h2>

                <label>Para criar usuario, insira os dados abaixo: </label>
                <br />


                <input type="text" placeholder="Nome" value={this.state.inputName} onChange={this.handleNameValue}></input>
                <br />
                <input type="email" placeholder="E-mail" value={this.state.inputEmail} onChange={this.handleEmailValue}></input>
                <br />
                <button onClick={this.createUser}> Criar usuário </button>


            </div>


        )
    }
}