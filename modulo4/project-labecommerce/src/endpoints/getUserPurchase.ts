import { Request, Response } from "express";
import selectPurchaseUser from "../data/selectPurchaseUser";
import selectUser from "../data/selectUser";

export default async function getUserPurchase(req: Request, res: Response) {
  try {
    const user_id = req.params.user_id;
    const userExist = await selectUser(user_id);
    if (!userExist) {
      throw new Error(`O usuario da id ${user_id} não foi encontrado`);
    }
    
    const allPurchasesByUser = selectPurchaseUser(user_id);
    
    res?.status(200)?.send(allPurchasesByUser)
  } catch (error: any) {
    res.status(500).send({ message: error.message || error.sqlMessage});
  }
}
