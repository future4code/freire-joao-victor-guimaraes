import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_BASE } from '../Constantes/URL_BASE.js';

export const useRequestData = () => {
    const [data, setData] = useState([]);

    const GetData = () => {

        axios.get(`${URL_BASE}/trips`)

            .then(res => {
                setData(res.data.trips);     
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        GetData();
    }, [])

    return data
}

