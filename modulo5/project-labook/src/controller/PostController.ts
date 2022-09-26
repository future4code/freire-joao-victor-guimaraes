import { PostBusiness } from "../business/PostBusiness";
import { Request,Response } from "express";


export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    createPost = async (req:Request, res:Response)=>{
        try {

            const input = {
                content: req.body.content,
                token: req.headers.authorization
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    getPosts = async(req:Request, res:Response)=>{
        try {
            const token = req.headers.authorization as string
            
            const response = await this.postBusiness.getPosts(token)

            res.status(200).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message || error.sqlMessage})
        }
    }
    
    deletePost = async(req:Request, res:Response)=>{
        try {
            const token = req.headers.authorization as string
            const id = req.params.id as string

            const responde = await this.postBusiness.deletePost(token,id)

            res.status(200).send(responde)
        } catch (error:any) {
            res.status(400).send({ message: error.message || error.sqlMessage})
        }

        likePost = async(req:Request, res:Response)=>{
            try {
                const token = req.headers.authorization as string
                const id = req.params.id as string
    
                const responde = await this.postBusiness.likePost(token,id)
    
                res.status(200).send(responde)
            } catch (error:any) {
                res.status(400).send({ message: error.message || error.sqlMessage})
            }
        }
    }



    

}