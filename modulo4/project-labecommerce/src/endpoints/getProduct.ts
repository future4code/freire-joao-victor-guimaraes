import { Response, Request } from "express";
import selectProducts from "../data/selectProducts";


export default async function getProduct(req:Request, res:Response) {
    try {
        const allProducts = await selectProducts()

        res.status(200).send(allProducts)
    } catch (error:any) {
        res.status(500).send({message:error.message||error.sqlMessage})
    }
}