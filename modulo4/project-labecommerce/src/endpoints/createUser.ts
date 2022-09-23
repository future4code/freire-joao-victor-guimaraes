import { Request, Response } from "express";
import insertUserDb from "../data/insertUserDb";
import { User, userData } from "../types/typeUser";




export const createUser =async (req:Request, res:Response) => {
    try {
        const {name,email,password}:User = req.body;
        if(!name||!email||!password){
            throw new Error("Check the data entered - name, email, password.");
        }
        const userData:userData ={
            id: Date.now().toString(),
            name,
            email,
            password
        }
        
     const userCreated =   await insertUserDb(userData)
res.status(200).send({message: userCreated})
    } catch (error:any) {
        res.status(500).send(error.message || error.sqlMessage
)
    }
}