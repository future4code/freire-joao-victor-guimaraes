import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { IRegisterUserInputDTO } from "../models/User";
export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  registerUser = async (req: Request, res: Response) => {
    try {
      const input: IRegisterUserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      const response = await this.userBusiness.registerUser(input);
      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  doLogin = async(req:Request,res:Response)=>{
   try {
    const input:any ={
        email:req.body.email,
        password:req.body.password
    }
    const response = await this.userBusiness.login(input);
      res.status(201).send(response);
   } catch (error:any) {
    res.status(400).send({ message: error.message });
   }
  }


}
