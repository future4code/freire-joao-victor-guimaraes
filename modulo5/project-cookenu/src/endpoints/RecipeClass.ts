import { Request, Response } from "express";
import RecipeData from "../data/RecipeData";
import { MissingFields } from "../error/MissingFields";
import Recipe from "../model/Recipe";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import { Role } from "../types";

export default class RecipeClass {
  async createRecipe(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const { title, description } = req.body;

      // const timeElapsed = Date.now()
      // const date = new Date(timeElapsed)
      // const create_at = date.toLocaleDateString()

      if (!token) {
        throw new Error("Missing Authorization - token");
      }
      if (!title || !description) {
        throw new MissingFields();
      }
      // ID gerada aletoriamente
      const id = new IdGenerator().generateId();

      const tokenData = new Authenticator().getTokenData(token);
      const author_id = tokenData.id;
      const InstanceRecipeData = new RecipeData();
      const insertRecipe = new Recipe(id, title, description, author_id);

      const anwser = await InstanceRecipeData.createRecipe(insertRecipe);

      res.status(201).send(anwser);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async recipesById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const id:string = req.params.id
      if (!token) {
        throw new Error("Missing Authorization - token");
      }
      const tokenData = new Authenticator().getTokenData(token);

      const instanceRecipe = new RecipeData()

      const anwser = await instanceRecipe.RecipeByIdUser(id)

      res.status(200).send({Recipe: anwser})

    }
     catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
