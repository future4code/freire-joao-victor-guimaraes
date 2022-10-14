import { UserDatabase } from "../database/UserDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import {
  IDoLoginInputDTO,
  IDoLoginOutputDTO,
  IRegisterUserInputDTO,
  IRegisterUserOutputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { userRouter } from "../router/userRouter";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  registerUser = async (input: IRegisterUserInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new NotFoundError("Favor preencher todos os campos");
    }
    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido");
    }
    if (typeof email !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido");
    }
    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido");
    }
    if (name.length < 3) {
      throw new ParamsError(
        "Parâmetro 'name' inválido: mínimo de 3 caracteres"
      );
    }
    if (password.length < 6) {
      throw new ParamsError(
        "Parâmetro 'password' inválido: mínimo de 6 caracteres"
      );
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    const ifEmailAlreadyExist = await this.userDatabase.findByEmail(email);

    if (ifEmailAlreadyExist) {
      throw new ConflictError("Email já cadastrado!");
    }
    const id = this.idGenerator.generate();
    const hashedPass = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPass, USER_ROLES.NORMAL);
    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);
    const answer: IRegisterUserOutputDTO = {
      message: "Usuario cadastrado com sucesso",
      token,
    };
    return answer;
  };

  doLogin = async (input: IDoLoginInputDTO) => {
    const { email, password } = input;

    if (typeof email !== "string") {
      throw new ParamsError("Parâmetro 'email' inválido");
    }
    if (typeof password !== "string") {
      throw new ParamsError("Parâmetro 'password' inválido");
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }
    if (password.length < 6) {
      throw new ParamsError(
        "Parâmetro 'password' inválido: mínimo de 6 caracteres"
      );
    }
    const userExist = await this.userDatabase.findByEmail(email);
    if (!userExist) {
      throw new ConflictError("Email não cadastrado!");
    }

    const user = new User(
      userExist.id,
      userExist.name,
      userExist.email,
      userExist.password,
      userExist.role
    );

    const passwordIsCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );
    if (!passwordIsCorrect) {
      throw new AuthenticationError("Password incorreto");
    }
    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const answer: IDoLoginOutputDTO = {
      message: "Logged as successfully",
      token
    };
    return answer;
  };
}
