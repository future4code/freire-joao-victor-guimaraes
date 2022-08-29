import { Request,Response } from "express"

import connection from "../connection"

export default async function createUser(req:Request, res:Response) {
    try{
        await connection("TodoListUser")
        .insert({
        id:Date.now()+Math.random().toString(),
        name: req.body.name,
        nickname:req.body.nickname,
        email:req.body.email
    })
            res.status(200).send("Sucess!")
            } catch(error:any){
                
            }
      
    
}