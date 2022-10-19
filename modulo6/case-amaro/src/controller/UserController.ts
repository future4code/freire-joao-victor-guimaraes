import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { Request, Response } from "express";
import { ILoginInputDTO, IRegisterInputDTO } from "../models/User";
export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  register = async (req: Request, res: Response) => {
    try {
      const input:IRegisterInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const answer = await this.userBusiness.register(input)
      res.status(201).send(answer)

    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
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

    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado ao logar usuário" });
    }
  };
}
