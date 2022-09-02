import { userData } from "../types/typeUser";
import { connection } from "./connection";

export default async function selectAllUsers():Promise<userData[]|undefined> {
    const result = await connection("labecommerce_user")
    .select("*")

    return result
}