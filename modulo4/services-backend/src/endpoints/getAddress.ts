import axios from "axios";
import {Address} from "../types/typeAddress";
import { Request, Response } from "express";

export const getAddress = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;

    if (!cep){
        throw new Error("Not Found")
    }

    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    const adress: Address = {
      cep: result.data.cep,
      logradouro: result.data.logradouro,
      bairro: result.data.bairro,
      cidade: result.data.cidade,
      estado: result.data.uf,
    };

    res.status(200).send({adress});
    
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
};
