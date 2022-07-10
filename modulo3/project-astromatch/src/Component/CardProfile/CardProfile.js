import axios from 'axios';
// import Assets from Assets;
import { Container, ContainerProfile, Profile, Img, Divbotao } from './styled'
import React, { useState, useEffect } from 'react';




export default function CardProfile() {
    const [profile, setProfile] = useState([]);
    const [id, setId] = useState();
    const [choice, setChoise] = useState(false);


    const GetProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')

            .then((response) => {

                setProfile(response.data.profile);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // const onChangeMatch = (e) => { e.target.value }
    const body = () =>{
        setId(profile.id)
        setChoise(true);
    }
    const ChoosePerson = () => {
      
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)

        .then((response) => {   
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.message)
        }); 


    }




    useEffect(() => {

        GetProfile();

    }, []);



    return (
        <Container>

            <ContainerProfile>

                <Profile>
                    <Img src={profile.photo} alt={profile.name} />
                    <p>{profile.name}</p>
                    <p>{profile.bio}</p>
                </Profile>

                <Divbotao>
                    <button>Recusar</button>
                        <p></p>
                    <button>Aceitar</button>

                </Divbotao>
            </ContainerProfile>
        </Container>
    )
}