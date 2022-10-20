import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
  public static TABLE_USERS = "Am_Users";

  checkingEmailExists = async (email: string) => {
    console.log()
    const answer = await BaseDatabase.connection(
      UserDataBase.TABLE_USERS)
      .where({ email });
       return answer[0];
  };

  createUser = async (user: User) => {
    await BaseDatabase.connection(UserDataBase.TABLE_USERS)
    .insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    });
  };
}
