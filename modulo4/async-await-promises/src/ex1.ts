import axios from "axios"
import { baseURL } from "./baseURL"

// A) https://labenews.herokuapp.com/subscribers

// B) Promise<any[]>

// C) 

const ex1 = async():Promise<any[]>  =>{
const response = await axios.get(`${baseURL}/subscribers`)
return response.data
}



const main = async ():Promise<any> => {
    try {
        const subscribers = await ex1()
    }catch(error:any){
const resp = error.responde?.data || error.message
console.log (resp)
    }
}
main()