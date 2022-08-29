import axios from "axios"
import { baseURL } from "./baseURL"

// A) https://labenews.herokuapp.com/subscribers

// B) Promise<any[]>

// C) 

const ex1 = async() =>{
const response = await axios.get(`${baseURL}/subscribers`)
return response.data
}



const main = async ():Promise<void> => {
    try {
        const subscribers = await ex1()
    }catch(error:any){

    }
}
main()