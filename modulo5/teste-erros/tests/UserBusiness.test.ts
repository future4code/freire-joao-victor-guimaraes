import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      email: "fulano@gmail.com",
      name: "Fulano",
      password: "fulano123",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });

  test("Um token é retornado quando o login é bem-sucedido", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha",
    };

    const response = await userBusiness.login(input);
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-admin");
  });
// Testando ERRO!

  test("Testando ERRO password com menor minimo de caracteres", async () => {
    expect.assertions(2);
    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "abc",
      };
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'password' inválido: mínimo de 6 caracteres"
        );
      }
    }
  });

  test("Testando match - email", async () => {
    expect.assertions(2);
    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmailcom",
        name: "Fulano",
        password: "abc1333",
      };
      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Parâmetro 'email' inválido");
      }
    }
  });

  test("Testando Erro de e-mail não cadastrado", async () => {
    expect.assertions(2);
    try {
      const input: ILoginInputDTO = {
        email: "123deOliveira4@gmail.com",
        password: "1234567",
      };
      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Email não cadastrado");
      }
    }
  });

  test("Testando Erro de e-mail não cadastrado", async () => {
    expect.assertions(2);
    try {
      const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "1234567",
      };
      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Password incorreto");
      }
    }
  });




});
