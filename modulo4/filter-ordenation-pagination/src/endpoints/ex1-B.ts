import {Request,Response } from "express"
import { userTypes } from "../types"
import { connection } from "../data/connection"


export const getTypeUser = async(req: Request,res: Response): Promise<any> =>{
    try {
      const type = req.params.type
       const result = await connection ("aula48_exercicio").select("name","type").where("type","like",`%${type}%`)
         const users = result.map(toUser)
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any ) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 
 const toUser = (input: any): userTypes => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}