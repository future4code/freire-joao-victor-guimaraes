import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { IDoLoginInputDTO, IRegisterUserInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    registerUser = async(req: Request, res: Response)=>{
        try {
            const input:IRegisterUserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const answer = await this.userBusiness.registerUser(input)
            res.status(201).send(answer)
        } catch (error:any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    doLogin = async(req:Request, res:Response) =>{
        try {
            const input:IDoLoginInputDTO ={
                email: req.body.email,
                password:req.body.password
            }
            const answer = await this.userBusiness.doLogin(input)
            res.status(200).send(answer)
        } catch (error:any) {
            console.log(error)
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message:error.message})
            }
            res.status(500).send({message:"Erro inesperado"})
        }
    }

}