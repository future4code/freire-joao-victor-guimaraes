import { UserDataBase } from "../database/UserDataBase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import {
  ILoginInputDTO,
  IOutputDTO,
  IRegisterInputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Autheticator";
import { HashManager } from "../services/HashManage";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public register = async (input: IRegisterInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new ParamsError(" Verifique se todos os campos estão preenchidos");
    }
    if (typeof name !== "string" || name.length < 3) {
      throw new ParamsError(
        "O parâmetro name deve ser do tipo String e ser maior que 3 caracteres"
      );
    }
    if (typeof email !== "string") {
      throw new ParamsError("O parâmetro name deve ser do tipo String ");
    }
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError("O parâmetro email está inválido");
    }
    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError(
        "O parâmetro password deve ser do tipo String e ser maior que 6 caracteres"
      );
    }

    const theEmailExists = await this.userDataBase.checkingEmailExists(email);

    if (theEmailExists) {
      throw new ConflictError("E-mail já cadastrado");
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);
    
    const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL);

    await this.userDataBase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);
    console.log(token);
    const answer: IOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token,
    };

    return answer;
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;
    if (!email || !password) {
      throw new ParamsError(" Verifique se todos os campos estão preenchidos");
    }
    if (typeof email !== "string") {
      throw new ParamsError("O parâmetro name deve ser do tipo String ");
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      throw new ParamsError("O parâmetro email está inválido");
    }
    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError("O parâmetro password deve ser do tipo String e ser maior que 6 caracteres"      );
    }

    const userDB = await this.userDataBase.checkingEmailExists(email);

    if (!userDB) {
      throw new NotFoundError("E-mail não cadastrado, realize o cadastro.");
    }
    
   const user = new User(
    userDB.id,
    userDB.name,
    userDB.email,
    userDB.password,
    userDB.role

   )

   const thePasswordIsCorrect = await this.hashManager.compare(password,user.getPassword())

   if(!thePasswordIsCorrect){
      throw new ParamsError("paramentro Senha incorreta")
   }
    const payload:ITokenPayload = {
      id:user.getId(),
      role:user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const answer:IOutputDTO = {
      message:"Login realizado com sucesso",
      token
    }
    return answer
  };




  // populate = async (input: any) => {
  //   const { id, name, tags } = input;
  // };
}
