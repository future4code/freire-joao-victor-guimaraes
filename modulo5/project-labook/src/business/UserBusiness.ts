
import { UserDatabase } from "../database/UserDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { IRegisterUserInputDTO, USER_ROLES,User } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}
    // Metodo de inserir usuario com tipagem
    registerUser = async(input:IRegisterUserInputDTO)=>{
        // Desestruturando simplicficada
        const {name, email, password} = input
       
        // Verificando se veio vazio 
        if(!name||!email||!password){
            throw new ParamsError();
        }
        // Verificando o name
        if(typeof name !== "string" || name.length < 3){
            throw new ParamsError();
        }
        // Verificando o email
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new ParamsError();
        }
        // Verificando o Password se veio menor que 6 ou string
        if (typeof password !== "string" || password.length < 6) {
            throw new ParamsError();
        }
        // Instanciando e verificando se o Email existe
        const emailAlreadyExist = await this.userDatabase.findByEmail(email)
        if(emailAlreadyExist){
            throw new ConflictError()
        }
        // Criando id aleatoria
        const id = this.idGenerator.generate()
        // Criptografando as senha
        const hashedPassword = await this.hashManager.hash(password) 
        // Instanciando novo usuario
        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )
        // Enviando novo usuario
            await this.userDatabase.createUser(user)

            const payload:ITokenPayload ={
                id:user.getId(),
                role:user.getRole()
            }

            const token = this.authenticator.generateToken(payload)

            const response:any = {
                message: "Cadastro realizado com sucesso",
                token
            }
    
            return response
    }

    login = async(input:any)=>{
        const{email,password}=input

        if(!email||!password){
            throw new ParamsError();
        }

        // Verificando o em email
        if(typeof email !== "string" || email.length < 3){
            throw new ParamsError();
        }
        // Verificando o email
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new ParamsError();
        }
        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'password' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB){ 
            throw new NotFoundError()
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role       
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())
        
        if(!isPasswordCorrect) {
            throw new ParamsError()
        }
        const payload:ITokenPayload={
        id:user.getId(),
        role:user.getRole()     
        }
        const token =  this.authenticator.generateToken(payload)

        const response:any ={
            message: " Login realizado com sucesso ",
            token
        }
        return response
    }

   




}