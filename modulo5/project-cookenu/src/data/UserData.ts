import { BaseConnectionData } from "./BaseConnectionData";
import User, { UserDB } from "../model/User";
import { Role } from "../types";
 

class UserData extends BaseConnectionData {
  private static tableName = "user_cookenu";

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await BaseConnectionData.connection(UserData.tableName)
      .select("*")
      .where({ email });

    if (!result.length) {
      return undefined;
    }
    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role
    );
  }
  async createUser(user: User): Promise<string> {
    await BaseConnectionData.connection(UserData.tableName)
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
      })
    return "User registered successfully";
  }
  async getUserById(id: string): Promise<any> {
    const result = await BaseConnectionData.connection(UserData.tableName)
      .select("*")
      .where({ id });
    // const user: UserDB = {
    //   id: result[0].id,
    //   name: result[0].name,
    //   email: result[0].email,
    // };
    // return user;
    return result[0];
  }
  // async alterRolebyId(id:string,role:Role){
  //   const result = await BaseConnectionData.connection().update(UserData.tableName).set({role:Role.A}).where({id})
  // }

}
export default UserData;
