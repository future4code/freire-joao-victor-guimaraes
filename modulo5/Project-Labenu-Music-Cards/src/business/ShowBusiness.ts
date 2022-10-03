import { start } from "repl";
import { ShowDatabase } from "../database/ShowDatabase";
import { ParamsError } from "../errors/ParamsError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { ICreateShowInputDTO, Show } from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  createShow = async (input: ICreateShowInputDTO) => {
    const { token, band, starts_at } = input;

    if (!token || !band || !starts_at) {
      throw new ParamsError("Todos os campos devem ser preenchidos");
    }
    if (band.length < 1 || typeof band !== "string") {
      throw new ParamsError();
    }

    const userTokenData = this.authenticator.getTokenPayload(token);
    if (userTokenData?.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError();
    }
    const id = this.idGenerator.generate();

    const show = new Show(id, band, starts_at);

    await this.showDatabase.insertShow(show);

    const answer = { message: "Show cadastrado com sucesso" };

    return answer;
  };

  getShow = async (input:any)=>{
       const {token} = input
       if(!token){
        throw new ParamsError("Todos os campos devem ser preenchidos")
       }

       const answer = await this.showDatabase.selectAllShows()

       return answer
  }


}
