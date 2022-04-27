interface ICurrentUser {
  userName: string;
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
  jwtkey: boolean;
}

export type { IUserDto, ICurrentUser, IMember };
