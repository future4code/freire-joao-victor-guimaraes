import { PostBusiness } from "../src/business/PostBusiness";
import {
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
    const answer = await postBusiness.getPosts(input);
    expect(answer.posts.length).toBe(4);
    expect(answer.posts[0]).toBeInstanceOf(Post);
  });

  test("Deve ser possível criar um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock",
    };

    const answer = await postBusiness.createPost(input);

    expect(answer.message).toBe("Post criado com sucesso");
    expect(answer.post).toBeInstanceOf(Post);
    expect(answer.post.getId()).toBe("id-mock");
    expect(answer.post.getContent()).toBe("Teste do mock");
    expect(answer.post.getLikes()).toBe(0);
    expect(answer.post.getUserId()).toBe("id-mock");
  });

  test("Deletando Post sendo ADMIN", async () => {
    const input: IDeletePostInputDTO = {
      token: "token-mock-admin",
      postId: "201",
    };

    const answer = await postBusiness.deletePost(input);
    expect(answer.message).toBe("Post deletado com sucesso");
  });

  test("Deletando POST, sendo NORMAL",async()=>{
    const input: IDeletePostInputDTO = {
        token: "token-mock-normal",
        postId: "204",
      };
  
      const answer = await postBusiness.deletePost(input);
      expect(answer.message).toBe("Post deletado com sucesso");
  })
});
