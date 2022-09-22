import { purchaseData } from "../types/typePurchase";
import { connection } from "./connection";

export default async function insertPurchase(
  purchase: purchaseData
): Promise<string> {
  const { id, user_id, product_id, quantity, total_price } = purchase;
  await connection("labecommerce_purchases").insert({
    id,
    user_id,
    product_id,
    quantity,
    total_price,
  });
  return `Compra realizada com sucesso! Número de identificação${purchase.id}`;
}
