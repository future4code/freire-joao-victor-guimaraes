export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getEmail = () => {
    return this.email;
  };

  public getPassword = () => {
    return this.password;
  };

  public getRole = () => {
    return this.role;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setEmail = (newEmail: string) => {
    this.email = newEmail;
  };

  public setPassword = (newPassword: string) => {
    this.password = newPassword;
  };

  public setRole = (newRole: USER_ROLES) => {
    this.role = newRole;
  };
}
export interface singUpInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface loginInputDTO {
  email: string;
  password: string;
}

export interface GetUserInputDTO {
  token: string;
  search: string;
  order: string;
  sort: string;
  limit: string;
  page: string;
}

export interface DeleteUserInputDTO {
  token: string;
  idToDelete: string;
}

export interface EditUserInputDTO {
  token: string;
  idToEdit: string;
  name: string;
  email: string;
  password: string;
}


export interface responseOutPutDTO {
  message:string
  token:string
}
export interface deleteOutPutDTO{
  message:string
}
export interface getUsersOutputDTO{
id:string
name:string 
email:string
}
export interface editOutputDTO {
message:string
}