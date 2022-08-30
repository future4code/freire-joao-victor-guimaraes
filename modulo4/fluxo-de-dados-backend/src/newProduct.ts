import express from 'express'
import cors from 'cors'
import { produtos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// app.post('/addProduct',(req,res)=>{



// })

app.get("/allProducts",(req,res)=>{
const lsita = produtos?.map(item=>item)
res.send(lsita)

})

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003");
    
    })