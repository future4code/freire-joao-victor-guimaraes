import React from 'react';
import { CardPlay,  IconsCard, ComponeteCard } from './styled'

import lixo from '../../assets/cesto-de-lixo.png';
import axios from 'axios';

class CardPlaylist extends React.Component {

    state = {
        TodasPlaylist: []
    }

    componentDidMount() {
    this.ShowAllPlaylists();
    }

    ShowAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers:
            {
                Authorizatio: "joaoVictor-victoy-Freire"
            }
        }
        ).then((res) => {
           
            console.log({TodasPlaylist: res.data.result.list});
        })
            .catch((err) => {
                console.log(err.message);
            });


    }



    render() {
        const renderedPlaylist = this.state.TodasPlaylist.map((playlist) =>{ 
            return <p>{playlist.name}
            </p>})

        return (
            <div>
                <CardPlay>
                    {/* <ImgCard src={props.imagem} alt={props.texto} /> */}
                    {renderedPlaylist} 
                    <ComponeteCard>
                        
                        <IconsCard src={lixo} alt='' />
                    </ComponeteCard>


                </CardPlay>

            </div>
        )
    };
} export default CardPlaylist;