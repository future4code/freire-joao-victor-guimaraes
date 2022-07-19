import axios from 'axios';

import { useState, useEffect } from 'react';

export const useRequestData = () => {
    const [data, setAbilities] = useState([])


    const GetAbilities = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/4`)

            .then((res) => {
                
                setAbilities(res.data.abilities);
               
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    useEffect(() => {
        GetAbilities();
    }, [])

    return data;

}

export const useSprites = () => {

    const [fotos, setSprites] = useState({})

    const GetSprites = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/4`)

            .then((res) => {
                
                setSprites(res.data.sprites.front_default)
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    useEffect(() => {
        GetSprites();
    }, [])

    return fotos;

}

export const useName = () => {

    const [data, setData] = useState({})

    const GetData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/1`)

            .then((res) => {
                
                setData(res.data.name)
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    useEffect(() => {
        GetData();
    }, [])

    return data;

}

export const useAllpokemons = () => {

    const [data, setData] = useState([])

    const GetData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)

            .then((res) => {
                
                setData(res.data.results)
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    useEffect(() => {
        GetData();
    }, [])

    return data;

}

export const useMoves = () => {

    const [data, setData] = useState([])

    const GetData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/1`)

            .then((res) => {
                
                setData(res.data.results)
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    useEffect(() => {
        GetData();
    }, [])

    return data;

}