import { AddressInfo } from "net";
import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'

import { pingRouter } from './router/pingRouter'

dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


app.use("/ping", pingRouter)