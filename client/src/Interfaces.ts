interface ICurrentUser {
  userName: string;
  jwtToken: string;
  id: string;
}

interface IMember {
  id: string;
  age: number;
  userName: string;
  gender: string;
  city: string;
}

interface IUserDto {
  UserName: string;
  jwtToken: boolean;
}

export type { IUserDto, ICurrentUser, IMember };
