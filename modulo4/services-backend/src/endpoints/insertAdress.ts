import { Request, Response } from "express";
import insertAdressDb from "../data/insertAdressDb";
import { FullAddress } from "../services/FullAddress";

export const insertAdress = async (req: Request, res: Response) => {
  try {
    const { numero, complemento } = req.body;
    const cep = req.params.cep;
    if (!numero) {
      throw new Error("Error");
    }

    const address = await FullAddress(cep);

    if (!address || address === undefined) {
      throw new Error("Cep Inválido");
    }
    await insertAdressDb(address, numero, complemento);
    res.status(200).send("Endereço cadastrado com sucesso");
  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage);
  }
};
