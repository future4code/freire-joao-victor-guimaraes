import {app }from "./app"
import { AddressInfo } from "net";
import UserClass from "./endpoints/UserClass";
import RecipeClass from "./endpoints/RecipeClass";

const userController = new UserClass
const recipeController = new RecipeClass

app.post("/register-user",userController.registerUser)
app.post("/login",userController.userLogin)
app.get("/user/profile",userController.userProfile)
app.get("/user/:id",userController.selectOtherProfile)


app.post("/createRecipe",recipeController.createRecipe)
app.get("/recipes/:id",recipeController.recipesById)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});