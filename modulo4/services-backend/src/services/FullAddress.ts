import axios from "axios";
import {Address} from "../types/typeAddress";
import { Request, Response } from "express";

export const FullAddress = async (req: Request, res: Response):Promise<Address | undefined> => {
  try {
    const cep = req.params.cep;

    if (!cep || undefined){
        throw res.status(400).send("Not Found")
    }

    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    const adress: Address = {
      cep: result.data.cep,
      logradouro: result.data.logradouro,
      bairro: result.data.bairro,
      cidade: result.data.cidade,
      estado: result.data.uf,
    };

    return adress
    
  } catch (error: any) {
    return undefined
  }
};
