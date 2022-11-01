import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { Request, Response } from "express";
import { ILoginInputDTO, IPopulateDTO, IRegisterInputDTO } from "../models/User";
import * as path from "path"
export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  register = async (req: Request, res: Response) => {
    try {
      const input:IRegisterInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };
     
      const answer = await this.userBusiness.register(input)
      res.status(201).send(answer)

    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message:error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const input:ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const answer = await this.userBusiness.login(input);
      res.status(200).send(answer)

    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao logar usuário" });
    }
  };

  populate = async (req: Request, res: Response) => {
    try {
      
      const input:any = {
        id:req.body.id,
        name:req.body.name,
        tags:req.body.tags
}

const fs = require("fs")
function readFileJson(file:any){
  try {
    let content = fs.readFileJson(file,"utf-8")
    return JSON.parse(content)
  } catch (error) {
    console.log(error)
  }
}
const lendoJson = readFileJson(path.resolve(__dirname,"../../products.json"))
  console.log("o que esse faz?",lendoJson.products.map((result:any)=>{
    return{id:result.id,name:result.name}
  }))




      console.log("aqui", input)
      const answer = await this.userBusiness.populate(input)
      

    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message:error.message });
    }
  };
}


