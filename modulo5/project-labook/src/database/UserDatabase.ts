import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"
    
    findByEmail = async(email:string)=>{
        const userDB: IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .where({email})

        return userDB[0]
    }

    createUser = async(user:User)=>{
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
            id:user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role:user.getRole()
        })
    }




}