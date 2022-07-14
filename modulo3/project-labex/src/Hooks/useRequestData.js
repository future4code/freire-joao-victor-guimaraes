import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_BASE } from '../Constantes/URL_BASE.js';

export const useRequestData = () => {
    const [data, SetData] = useState([]);

    const GetData = () => {

        axios.get(`${URL_BASE}/trips`)

            .then(response => {
                SetData(response.data.trips);     
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

