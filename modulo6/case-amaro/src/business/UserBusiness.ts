import { UserDataBase } from "../database/UserDataBase";
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


      public register = async (input) => {
        
       } 

       public login =async (input) => {
        
       }

}