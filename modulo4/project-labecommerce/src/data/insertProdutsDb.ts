import { productsData } from "../types/typeProduts";
import { connection } from "./connection";



export default async function insertProductsDb(product:productsData):Promise<string>{
   const {id,name,price,image_url }= product

   await connection("labecommerce_products")
   .insert({
    id_p:id,
    name,
    price,
    image_url
   })
   return `O produto ${name} foi criado com sucesso!`
}