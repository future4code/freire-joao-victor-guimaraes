import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

console.log("Olá pessoa corretora")


app.get("/user",(req,res)=>{

    res.send("A funcionou")
})





app.listen(3003, () =>{
console.log("Server is running in http://localhost:3003");

})

