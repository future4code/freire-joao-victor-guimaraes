import { purchaseData } from "../types/typePurchase";
import { connection } from "./connection";

export default async function selectAllPurchases():Promise<purchaseData[]|undefined> {
    const result = await connection("labecommerce_purchases").select("*")
    return result
}