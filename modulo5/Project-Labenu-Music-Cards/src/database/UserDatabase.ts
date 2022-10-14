import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"



    findByEmail = async(email:string):Promise<IUserDB | undefined>=>{
        const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .where({email})
        
        return result[0]
    }

    createUser = async(user:User) =>{
        
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS).insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password:user.getPassword(),
            role:user.getRole() 
        })
    }


}