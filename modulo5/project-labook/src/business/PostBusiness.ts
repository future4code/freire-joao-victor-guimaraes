import { PostDatabase } from "../database/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { ParamsError } from "../errors/ParamsError";
import { IGetPostsOutPutDTO, Post } from "../models/Post";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  createPost = async (input: any) => {
    const { content, token } = input;

    if (!content || !token) {
      throw new ParamsError();
    }

    if (typeof content !== "string" || content.length < 1) {
      throw new Error("parâmetro deve ter no mínimo uma palavra");
    }

    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new ParamsError();
    }

    const id = this.idGenerator.generate();

    const user_id = payload.id;

    const post = new Post(id, content, user_id);
    await this.postDatabase.insertPost(post);
    const response = {
      message: "Post criado com sucesso",
    };

    return response;
  };

  getPosts = async (token: string) => {
    const payload = this.authenticator.getTokenPayload(token);
    if (!payload) {
      throw new ParamsError();
    }

    const postDB = await this.postDatabase.selectAllPosts();

    const posts = postDB.map((item) => {
      return new Post(item.id, item.content, item.user_id);
    });

    for(let post of posts){
      
      const postId = post.getId()
      const qtdLikes = await this.postDatabase.getLikes(postId)

      post.setLikes(qtdLikes) 
    }
    const response:IGetPostsOutPutDTO ={
      posts
    }
  };
}
