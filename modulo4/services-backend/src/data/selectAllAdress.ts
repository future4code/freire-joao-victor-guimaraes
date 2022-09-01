import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function selecAllAdress() {
    const result = await connection("services_adress").select("*");

  return result[0]
}