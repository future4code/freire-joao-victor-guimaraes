import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";

import { purchaseData } from "../types/typePurchase";

export default async function createPurchase(req: Request, res: Response) {
  try {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      throw new Error("Todos o valores devem ser preenchidos");
    }
    const userExist = await selectUser(user_id);
    if (!userExist) {
      throw new Error(`O usuario da id ${user_id} não foi encontrado`);
    }
    const productExist = await selectProduct(product_id);
    if (!productExist) {
      throw new Error(`O produto da id ${product_id} não foi encontrado`);
    }
    const totalPrice = productExist.price * quantity;

    const purchase: purchaseData = {
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price: totalPrice,
    };
    const result = await insertPurchase(purchase)
    res.status(200).send({message:result})
  } catch (error: any) {
    res.status(500).send({message: error.message|| error.sqlMessage})
  }
}
