export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  team: string;
  role: Role;
  token?: string;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class Pompier {
  id: number;
  name: string;
}

export class Leave {
  id: number;
  dateDepart: string;
  dateFin: string;
  user: User;
}
