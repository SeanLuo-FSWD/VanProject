interface IUserDto {
  UserName: string;
  jwtkey: boolean;
}

interface ICurrentUser {
  UserName: string;
}

export type { IUserDto, ICurrentUser };
