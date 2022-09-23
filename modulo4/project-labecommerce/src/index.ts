import { AddressInfo } from "net";
import app from "./app";
import { createProducts } from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import { createUser } from "./endpoints/createUser";
import getProduct from "./endpoints/getProduct";
import getPurchases from "./endpoints/getPurchases";
import getUserPurchase from "./endpoints/getUserPurchase";
import getUsers from "./endpoints/getUsers";

app.post("/registerUser",createUser)
app.get("/users", getUsers)
app.post("/registerProduct", createProducts)
app.get("/products", getProduct)
app.post("/resgisterPurchase", createPurchase)
app.get("/purchases",getPurchases)
app.get("/users/:user_id/purchases",getUserPurchase)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});