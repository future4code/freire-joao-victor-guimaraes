import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

// A) -
// app.put("/actorAlterSalary/:id", async (req, res) => {
//   try {
//     await connection("Actor")
//       .update({
//         salary: req.body.salary,
//       })
//       .where({ id: req.params.id });
//     res.status(200).send("Success!");
//   } catch (error: any) {
//     res.status(500).send(error.sqlMessage || error.message);
//   }
// });

// B) -
// app.delete("/actor/delete/:id", async (req, res) => {
//   try {
//     await connection("Actor").delete().where({ id: req.params.id });
//     res.status(200).send("Success!");
//   } catch (error: any) {
//     res.status(500).send(error.sqlMessage || error.message )
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
