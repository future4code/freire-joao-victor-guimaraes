import React from 'react';
// import AddMusic from '../AddMusic/AddMusic';
import CriarPlaylist from '../CriarPlaylist/CriarPlaylist';
import CardPlaylist from '../CardPlaylist/CardPlaylist';
import logo from '../../assets/logo.png';
import playList from '../../assets/playlist.png';


import {
    ContainerInfo,
    Head,
    CompHead,
    Body,
    MenuLateral,
    PainelPlalist,
    Footer,
} from "./styled";



class TelaInicial extends React.Component {

    state ={
        currentScreen: "CardPlaylist"
    }

    selectPage = () =>{
        switch (this.state.currentScreen) {
            case "CardPlaylist":
                return <CardPlaylist/>
            case "CriarPlaylist":
                return <CriarPlaylist/>
            default:
                return <CardPlaylist/>
    }
}

      render() {
    
        
        return (
            <ContainerInfo>

                <Head>

                    <img src={logo} alt='' onClick={this.selectPage("CardPlaylist")}/>
                    <CompHead>
                        <img src={playList} alt='' />
                        <label onClick={()=>this.selectPage("CriarPlaylist")}>Adicionar PlayList</label>



                    </CompHead>
                </Head>

                <Body>

                    <MenuLateral>
                    

                    </MenuLateral>

                    <PainelPlalist>
                    {this.selectPage()}
                    

                    </PainelPlalist>


                </Body>
                <Footer>
                    <h4>Todos os direitos reservados.</h4>
                </Footer>

            </ContainerInfo>

        );
    }
};

export default TelaInicial;