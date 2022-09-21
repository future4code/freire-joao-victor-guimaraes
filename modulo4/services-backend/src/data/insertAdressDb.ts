import { Address } from "../types/typeAddress";
import { connection } from "./connection";
import { Request } from "express";

export default async function insertAdressDb(
  adress: Address,
  numero: string,
  complemento: string
) {
  const { cep, logradouro, bairro, cidade, estado } = adress;
  const id_user: string = Date.now().toString();

  await connection("services_adress").insert({
    id_user,
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  });
}
