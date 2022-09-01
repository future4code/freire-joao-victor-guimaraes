import axios from "axios";
import { Address } from "../types/typeAddress";
import { Request, Response } from "express";
import { nodeModuleNameResolver } from "typescript";

export const FullAddress = async (
  cep: string
): Promise<Address | undefined> => {
  try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const adress: Address = {
      cep: result.data.cep,
      logradouro: result.data.logradouro,
      bairro: result.data.bairro,
      cidade: result.data.localidade,
      estado: result.data.uf,
    };

    return adress;
  } catch (error: any) {
    return undefined;
  }
};
