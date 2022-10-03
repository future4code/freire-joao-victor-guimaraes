import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    createShow = async(req:Request , res:Response)=>{
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                starts_at: req.body.starts_at
            }
            const answer = await this.showBusiness.createShow(input)
            res.status(201).send(answer)
        } catch (error:any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    getShow = async(req:Request, res:Response)=>{
        try {
            const input:any= {
                token:req.headers.authorization
            }
             const answer = await this.showBusiness.getShow(input)
             res.status(200).send(answer)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}