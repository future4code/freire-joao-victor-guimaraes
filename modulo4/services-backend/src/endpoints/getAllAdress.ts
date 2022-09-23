import axios from "axios";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import selecAllAdress from "../data/selectAllAdress";

export const getAllAddress = async (req: Request, res: Response) => {
  try {
    const result = await selecAllAdress()

    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
};
