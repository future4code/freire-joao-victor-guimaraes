
import {getUsersByName} from "./endpoints/ex1-A";
import { getTypeUsers} from "./endpoints/ex1-B"
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/filterUserByName", getUsersByName)
app.get("/TypeUsers/:type", getTypeUsers)


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})