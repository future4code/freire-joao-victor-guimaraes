import React, { useState } from 'react';
import axios from 'axios';


function Matches() {
    const [match, setMatch] = useState([])


    const GetMatches = () => {

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')

            .then((response) => {
                setMatch(response.data.matches);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }




    return (
        <div>


        </div>
    )
}