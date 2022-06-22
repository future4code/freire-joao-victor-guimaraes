import React from "react";
import axios from "axios";

export default class TelaDetalhes extends React.Component {
    state = {
        usuarioCadastrados: [],
        listaCarregada: false
    }


    componentDidMount = () => {
        this.getAllUsers();
    };



    getAllUsers = () => {
        const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "joaoVictorVictoy-freire"
                }
            }

        );
        request
            .then((response) => {
                response ? this.setState({ listaCarregada: true }) : this.setState({ listaCarregada: false })
                this.setState({ usuarioCadastrados: response.data });
                this.getAllUsers();
            }).catch((error) => {
                console.log(error.message);
                alert(error.message);
            });

    }


    deletarUser = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                {
                    headers: { Authorization: "joaoVictorVictoy-freire" }
                }
            )
                .then(() => {
                    // this.getAllUsers();
                    alert("Usuários Excluido");
                })
                .catch((error) => {
                    console.log(error.message);
                    // alert("Ocorre um erro", error.mensage);
                })

        }
    };





    render() {
        const usuarios = this.state.usuarioCadastrados.map((usuario) => {
            return <p key={usuario.id}> {usuario.name}
                    &nbsp;&nbsp;
                <button onClick={() => { this.deletarUser(usuario.id) }} > Delete </button>

            </p>

        })

        return (
            <div>
                <h2>Lista de Usuários</h2>
                {this.state.listaCarregada ? <p>{usuarios}   </p> : "carregando..."}
            </div>


        )
    }
}



