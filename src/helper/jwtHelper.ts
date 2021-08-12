import jwt_decode, { JwtPayload } from "jwt-decode";
//import jwt_encode from "jwt-encode";
import { userJWTType } from "../types/userInterfaces";
const jwt_encode = require("jwt-encode");
//TODO: move this to database if preferable
const SECRET = "secret";

export function generateJWT(data: userJWTType): JwtPayload {
  return jwt_encode(data, SECRET);
}

export function decodeJWT(jwt: string): userJWTType {
  return jwt_decode(jwt);
}
