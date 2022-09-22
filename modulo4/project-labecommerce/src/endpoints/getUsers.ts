import { Response, Request } from "express";
import selectAllUsers from "../data/selectAllUsers";

export default async function getUsers(req:Request, res:Response) {
    try {
        const allUsers = await selectAllUsers()

        res.status(200).send(allUsers)
    } catch (error:any) {
        res.status(500).send({message:error.message||error.sqlMessage})
    }
}