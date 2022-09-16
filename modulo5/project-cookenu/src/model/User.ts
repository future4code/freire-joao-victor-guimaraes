import { Role } from "../types";

class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: Role
  ) {}

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  getRole() {
    return this.role;
  }
}

export interface UserDB {
  id: string;
  name: string;
  email: string;
}
export default User;
