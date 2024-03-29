import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UseCard(props) {
    const [pokemon, setPokemon] = useState({});

    

    const PegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)



            .then((response) => {
                // guarda as infos do pokemon no estado
                setPokemon(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };


    useEffect(() => {

        PegaPokemon(props.pokemon);


    }, [props.pokemon]);

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}

        </div>
    )

}

