import {app }from "./app"
import { AddressInfo } from "net";
import UserClass from "./endpoints/UserClass";

const userController = new UserClass

app.post("/register-user",userController.registerUser)
app.post("/login",userController.userLogin)
app.get("/user/profile",userController.userProfile)
app.get("/user/:id",userController)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});