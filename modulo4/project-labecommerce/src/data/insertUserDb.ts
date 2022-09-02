import { userData } from "../types/typeUser";
import { connection} from "./connection";


export default async function insertUserDb(user:userData):Promise<string> {
 const {id,name,email,password} = user 
   

    await connection("labecommerce_user").insert({
        id_u:id,
        name,
        email,
        password,
    })
    
    return `O usuário ${name}, foi criado com sucesso!`
} 