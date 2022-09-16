
export interface AuthenticationData{
    id:string
    role:Role
}
export enum Role {
    A = "ADMIN",
    N = "NORMAL"
}