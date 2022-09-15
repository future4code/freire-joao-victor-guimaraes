import { BaseConnectionData } from "./BaseConnectionData";
import User, { UserDB } from "../model/User";

class UserData extends BaseConnectionData {
  private static tableName = "user_cookenu";

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await BaseConnectionData.connection()
      .select("*")
      .from(UserData.tableName)
      .where({ email });

    if (!result.length) {
      return undefined;
    }
    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password
    );
  }
  async createUser(user: User): Promise<string> {
    await BaseConnectionData.connection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into(UserData.tableName);
    return "User registered successfully";
  }
  async getUserById(id: string): Promise<UserDB> {
    const result = await BaseConnectionData.connection()
      .select("id","name","email")
      .from(UserData.tableName)
      .where({ id });
    const user: UserDB = {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
    };
    return user;
  }
}
export default UserData;
