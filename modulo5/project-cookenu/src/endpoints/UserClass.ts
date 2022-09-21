import { Request, response, Response } from "express";
import UserData from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import IdGenerator from "../services/IdGenerator";
import User from "../model/User";
import hashManager from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { connection } from "../data/connection";
import { Role } from "../types";

export default class UserClass {
  private static tableName = "user_cookenu";
  async registerUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw new MissingFields();
      }

      if (password.length < 6) {
        throw new Error("A senha deve ter no minimo 6 caracteres");
      }
      // Instaciando o UserData para verificar se o EMAIL está cadastrado na minha base de dados
      const userData = new UserData();
      const emailAllreadyExist = await userData.getUserByEmail(email);
      if (emailAllreadyExist) {
        throw new Error("Este e-mail possui cadastro ");
      }
      // Criando um ID unico
      const id = new IdGenerator().generateId();
      // Atribuindo Role N = Normal
      const role = Role.N;
      // Encriptando a senha para o DB
      const hashPassword = await new hashManager().hash(password);
      // Instanciando novo Usuario
      const user = new User(id, name, email, hashPassword, role);
      // Esperando
      const anwser = await userData.createUser(user);

      const token = new Authenticator().generateToken({ id, role });
      res.status(201).send({ message: anwser, token });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async userLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new MissingFields();
      }
      const userData = new UserData();
      const userDB = await userData.getUserByEmail(email);
      if (!userDB) {
        throw new Error("Invalid E-mail");
      }
      const correctPassword = await new hashManager().compare(
        password,
        userDB.getPassword()
      );
      if (!correctPassword) {
        throw new Error("Incorrect Password or E-mail");
      }

      const token = new Authenticator().generateToken({
        id: userDB.getId(),
        role: userDB.getRole(),
      });

      res.status(200).send({ message: "Successfully - Logged", token });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async userProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("Missing Paramenter - token");
      }
      const id: any = new Authenticator().getTokenData(token);
      // const result = await connection(UserClass.tableName)?.select("id","name","email").where(id)
      const userData = new UserData();
      const user = await userData.getUserById(id);
      res.status(200).send({ id: user.id, name: user.name, email: user.email });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async selectOtherProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const idOtherPerson = req.params.id;
      if (!token) {
        throw new Error("Missing Authorization - TOKEN");
      }

      const userData = new UserData();
      const searchPersonById = await userData.getUserById(idOtherPerson);

      res.status(200).send({ person: searchPersonById });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
