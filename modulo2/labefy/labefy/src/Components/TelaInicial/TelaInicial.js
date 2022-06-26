import React from 'react';
import AddMusic from '../AddMusic/AddMusic';
import CriarPlaylist from '../CriarPlaylist/CriarPlaylist';


import {
    ContainerInfo,
    Head,
    CompHead,
    Body
} from "./styled";

const TelaInicial = (props) => {


    return (
        <ContainerInfo>

            <Head>
                <h1>Labefy</h1>
                <img src="../../assets/logo.png" alt='' />
                <CompHead>
                    <h2>Todas Playlists</h2>

                    <h2>Criar Playlist</h2>
                </CompHead>
            </Head>

            <Body>
            <CriarPlaylist/>
            
            <AddMusic/>

            </Body>

        </ContainerInfo>

    );
};

export default TelaInicial;