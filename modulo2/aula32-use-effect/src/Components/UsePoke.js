import React, { useState, useEffect } from "react";
import UseCard from "./UseCard";
import axios from "axios";

export default function UsePoke() {
    const [pokeLista, setPokeLista] = useState([]);
    const [pokeName, setPokeName] = useState("");

    const MostrarPokemon = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=151")

            .then((response) => {
                // função que está setando no estado os 151 pokemons
                setPokeLista(response.data.results);
               
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onChangePokeName = (e) => {
        setPokeName(e.target.value);
    };

    useEffect (() => {

        MostrarPokemon();

    }, []);

    return (
        <div>
            <select onChange={onChangePokeName}>

                <option value={""}> Escolha um pokemon </option>

                {pokeLista.map(pokemon => {
                    return <option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                        </option>;
                })}

            </select>
            {pokeName && <UseCard pokemon={pokeName} />}
        </div>
    );
}
