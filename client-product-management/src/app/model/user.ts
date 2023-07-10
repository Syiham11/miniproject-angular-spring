import {Role} from './role';
export class User {
  id: number = 0;
  username: string="";
  password: string="";
  name: string="";
  role: Role | undefined;
  token: string="";
}
