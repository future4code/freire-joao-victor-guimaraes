import React from 'react';
import axios from 'axios';
import { CriarList } from './styled';

class CriarPlaylist extends React.Component {
    state = {
        PlaylistValue: ""
    }
    componentDidMount() {
        this.criarPlaylist();
    }


    criarPlaylist = () => {
        const body = {
            name: this.state.PlaylistValue
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "joaoVictor-victoy-Freire"
            }
        }
        ).then((res) => {
            alert("Success!");
            console.log(res.data);
        })
            .catch((err) => {
                console.log(err.message);
            });
    }
    onChangePlayList = (event) => {
        this.setState({ PlaylistValue: event.target.value });

    };


    render() {

        return (
            <div>

                <h2>Digite o nome da sua Playlist...</h2>

                <CriarList>
                    Nome: &nbsp;
                    <input type='text' value={this.state.PlaylistValue} onChange={this.onChangePlayList} placeholder='Nome da Playlist' ></input>
                    <button onClick={this.criarPlaylist}> Criar PlayList </button>
                </CriarList>



            </div>

        );
    };
};

export default CriarPlaylist;