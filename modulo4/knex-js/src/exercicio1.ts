import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

// A) - Com o result[0][0] ele retorna o um objeto { } -- E quando utilizamos o result[0] Array[{ }] com objeto -- E quando é utilizando result retorna dois arrays de resultados.

// B) -
// const getActorByName = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//     `);
//   return result[0][0];
// };
// app.get("/actor/:name", async (req, res) => {
//   try {
//     const name = req.params.name;
//     const result = await getActorByName(name);
//     res.status(200).send(result);
//   } catch (error: any) {
//     res.status(500).send(error.sqlMessage || error.message);
//   }
// });

// C) -
// const getCountGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);
//     const count = result[0].count
//   return count;
// };

// app.get("/actor/:gender", async (req, res) => {
//   try {
//     const gender = req.params.gender;
//     const result = await getCountGender(gender);
//     res.status(200).send(result);
//   } catch (error: any) {
//     res.status(500).send(error.sqlMessage || error.message);
//   }
// });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;
