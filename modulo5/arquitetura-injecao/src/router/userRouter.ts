import {Router} from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../database/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
    new UserDatabase(),
    new HashManager(),
    new IdGenerator(),
    new Authenticator()
)) 

userRouter.post("/users/signup", userController.signup)
userRouter.post("/users/login", userController.login)
userRouter.get("/users", userController.getUsers)
userRouter.delete("/users/:id", userController.deleteUser)
userRouter.put("/users/:id", userController.editUser)