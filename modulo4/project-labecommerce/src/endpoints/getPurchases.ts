import { Request, Response } from "express";
import selectAllPurchases from "../data/selectAllPurchases";
import selectAllUsers from "../data/selectAllUsers";


export default async function getPurchases(req:Request, res:Response) {
    try {
        
        const allPurchases = await selectAllPurchases()

        res.status(200).send(allPurchases)

    } catch (error:any) {
        res.status(500).send({message: error.message|| error.sqlMessage})
    }
}