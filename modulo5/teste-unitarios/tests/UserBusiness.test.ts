import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    
    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "jpap@gmail.com",
            name: "Joao",
            password: "Guimaraes123"
        }

        const answer = await userBusiness.signup(input)
        expect(answer.message).toBe("Cadastro realizado com sucesso")
        expect(answer.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
       const input:ILoginInputDTO ={
            email: "astrodev@gmail.com",
            password: "bananinha"
       }

       const answer = await userBusiness.login(input)
       expect(answer.message).toBe("Login realizado com sucesso")
       expect(answer.token).toBe("token-mock-admin")

    })
})