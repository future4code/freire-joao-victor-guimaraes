import { Request, Response } from "express";
import insertProductsDb from "../data/insertProdutsDb";
import { Product, productsData } from "../types/typeProduts";





export const createProducts =async (req:Request, res:Response) => {
    try {
        const {name,price,image_url}:Product = req.body;
        if(!name||!price||!image_url){
            throw new Error("Check the data entered - name, price, image_url");
        }

        const productsData: productsData = {
            id: Date.now().toString(),
            name,
            price, 
            image_url
        }


       const awaser = await insertProductsDb(productsData)
res.status(201).send({message:awaser})
    } catch (error:any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}