export interface User {
  id?:number;
  pseudo:string;
  firstName:string;
  lastName:string;
  sexe:string;
  mail:string;
  birthDate:string;
  password:string;
  token?: string;
}
