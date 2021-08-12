export interface userJWTType {
  id: number;
  name: string;
  email: string;
}
export interface ILoginResponse{ 
  accessToken: string; 
  userInfo?: userJWTType 
}