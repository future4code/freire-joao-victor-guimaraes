import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDataBase } from "../database/UserDataBase";
import { Authenticator } from "../services/Autheticator";
import { HashManager } from "../services/HashManage";
import { IdGenerator } from "../services/IdGenerator";


export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDataBase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)

// userRouter.post("/populate", userController.populate)

