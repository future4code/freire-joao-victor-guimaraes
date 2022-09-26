import { on } from "events";
import { IPostDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  insertPost = async (post: Post) => {
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert({
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    });
  };
  private postModel = (post: Post): IPostDB => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };
    return postDB;
  };

  selectAllPosts = async () => {
    const result = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    ).select("*");
    return result;
  };

  getLikes = async (postId: string) => {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .select("*")
      .count("id AS LIKES")
      .where({ post_id: postId });

    return result[0].likes;
  };
}
