//Describe the structure of the user
export interface User {
  id?:number;
  pseudo:string;
  firstName:string;
  lastName:string;
  sexe:string;
  mail:string;
  birthDate:string;
  role:string;
  password:string;
  token?: string;
}
