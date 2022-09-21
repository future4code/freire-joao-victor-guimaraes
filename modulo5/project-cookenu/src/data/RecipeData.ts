import Recipe from "../model/Recipe";
import { BaseConnectionData } from "./BaseConnectionData";




class RecipeData extends BaseConnectionData{
 private static tableName = "recipes_cookenu";

   async createRecipe(insertRecipe:Recipe):Promise<string>{
        await BaseConnectionData.connection(RecipeData.tableName).insert({
            id:insertRecipe.getId(),
            title:insertRecipe.getTitle(),
            description:insertRecipe.getDescription(),
             author_id:insertRecipe.getAuthor()
            
        })
        return "Recipe registered successfully";
    }
    async RecipeByIdUser(id:string){
        const result = await BaseConnectionData.connection(RecipeData.tableName).select("*").where({id})

        return result[0]
    }
}
 export default RecipeData