import express, {Express } from  "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"
import createUser from "./endpoints/createUser";

const app: Express = express();
app.use(express.json());
app.use(cors());


//      1. Criar usuário 
app.post("/createUser",createUser)

//    2. Pegar usuário pelo id
// const getUserById =async(id:string):Promise<any> =>{
//   const result = await connection.raw(` 
//   SELECT id, name FROM TodoListUser WHERE id = "${id}"
//   `)
//   return result[0][0]
// }

// app.get("/user/:id",async(req,res)=>{
// try{
//   const id = req.params.id

//   const result = await getUserById(id)
 
//   res.status(200).send(result)
// }catch(error:any){
//   res.status(500).send(error.message || error.sqlMessage)

// }
// })



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
  
  export default app

