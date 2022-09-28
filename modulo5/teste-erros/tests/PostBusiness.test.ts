import { assert } from "console";
import { PostBusiness } from "../src/business/PostBusiness";
import { BaseError } from "../src/errors/BaseError";
import {
  IAddLikeInputDTO,
  ICreatePostInputDTO,
  IDeletePostInputDTO,
  IGetPostsInputDTO,
  Post,
} from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("Testando a PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Deve retornar uma lista de posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };

    const response = await postBusiness.getPosts(input);
    expect(response.posts.length).toBe(4);
    expect(response.posts[0]).toBeInstanceOf(Post);
  });

  test("Deve ser possível criar um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock",
    };

    const response = await postBusiness.createPost(input);

    expect(response.message).toBe("Post criado com sucesso");
    expect(response.post).toBeInstanceOf(Post);
    expect(response.post.getId()).toBe("id-mock");
    expect(response.post.getContent()).toBe("Teste do mock");
    expect(response.post.getLikes()).toBe(0);
    expect(response.post.getUserId()).toBe("id-mock");
  });

  test("Testando Erro CreatePost minimo de caracteres", async () => {
    expect.assertions(2);
    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock-normal",
        content: "",
      };
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'content' inválido: mínimo de 1 caracteres"
        );
      }
    }
  });

  test("Testando Erro GetPost - Credenciais inválidas", async () => {
    expect.assertions(2);
    try {
      const input: IGetPostsInputDTO = {
        token: "token-mocknormal",
      };

      await postBusiness.getPosts(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Testando Erro DeletePost - Post não encontrado ", async () => {
    expect.assertions(2)
    try {
        const input:IDeletePostInputDTO = {
            token:"token-mock-normal",
            postId:"206"
        }
        await postBusiness.deletePost(input)
    } catch (error) {
        if(error instanceof BaseError){
          expect(error.statusCode).toBe(404)
          expect(error.message).toBe("Post não encontrado")
        }
    }
  })

  test("Testando Erro DeletePost - Credenciais inválidas ", async () => {
    expect.assertions(2)
    try {
        const input:IDeletePostInputDTO = {
            token:"103",
            postId:"202"
        }
        await postBusiness.deletePost(input)
    } catch (error) {
        if(error instanceof BaseError){
          expect(error.statusCode).toBe(401)
          expect(error.message).toBe("Credenciais inválidas")
        }
    }
  })

  test("Testando Erro addLike - Já deu like", async()=>{
    expect.assertions(2)
    try {
      const input:IAddLikeInputDTO ={
        token:"token-mock-normal",
        postId:"201"

      }
      await postBusiness.addLike(input)
    } catch (error) {
      if(error instanceof BaseError){
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Já deu like")
      }
      
    }
  })


});
