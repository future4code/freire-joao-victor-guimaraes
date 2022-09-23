import { connection } from "./connection";
import { userData } from "../types/typeUser";

export default async function selectUser(user_id: string):Promise<userData| undefined>{
  const [result] = await connection("labecommerce_user")
    .select("*")
    .where({ id: user_id });
  if (result) {
    const userType: userData = {
      id: result.id,
      name: result.name,
      email: result.email,
      password: result.password,
    };
    return userType;
  } else {
    return undefined;
  }
}
