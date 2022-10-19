import { UserDataBase } from "../database/UserDataBase";
import { ILoginInputDTO, IRegisterInputDTO } from "../models/User";
import { Authenticator } from "../services/Autheticator";
import { HashManager } from "../services/HashManage";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness{
    constructor(
        private userDataBase: UserDataBase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}


      public register = async (input:IRegisterInputDTO) => {
        const {name, email ,password} = input

        if(!name|!email|password){
            throw new
        }

       } 

       public login =async (input:ILoginInputDTO) => {
        const {email, password}= input
       }

}