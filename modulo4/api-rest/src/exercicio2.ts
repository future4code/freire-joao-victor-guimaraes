import express, { Request, response, Response } from "express";
import cors from "cors";
import { request } from "http";

type User = {
  id: number;
  name: string;
  email: string;
  type: userType,
  age: number;
};
enum userType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: userType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: userType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: userType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: userType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: userType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: userType.ADMIN,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.get("/exercicio2",(req:Request, res: Response)=>{

    try{
        const type:string = req.query.userType as string
        const TypeUser: User[] | undefined = users.filter((item)=>item.type === type)
        if(!TypeUser){

        }
        res.status(200).send(TypeUser)
    }catch(error){

    }

    
})




app.listen(3003, () => {
  console.log("Server is running at port 3003");
});