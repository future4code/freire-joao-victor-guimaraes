// import selectAllUsers from '../../data/selectAllUsers';

import {Request,Response } from "express"
import { userTypes } from "../types"
import { connection } from "../data/connection"


export const getUsersByName = async(req: Request,res: Response): Promise<any> =>{
    try {
      const name = req.query.name
       const result = await connection ("aula48_exercicio").where("name","like",`%${name}%`)
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