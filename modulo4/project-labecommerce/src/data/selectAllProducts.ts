import { productsData } from "../types/typeProduts";
import { connection } from "./connection";


export default async function selectProducts():Promise<productsData[]|undefined> {
    const result = await connection("labecommerce_products")
    .select("*")

    return result
}