import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { generateJWT, decodeJWT } from "../helper/jwtHelper";
import { userJWTType, ILoginResponse } from "../types/userInterfaces";
import jwtDecode from "jwt-decode";

export class UserService {
  private userRepository = getRepository(User);

  // static all=async(request: Request, response: Response, next: NextFunction)=> {
  //   let userRepository = getRepository(User);
  //   return userRepository.find();
  // }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.userRepository.findOne(request.params.id);
  // }

  // async save(request: Request, response: Response, next: NextFunction) {
  //   return this.userRepository.save(request.body);
  // }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let userToRemove = await this.userRepository.findOne(request.params.id);
  //   await this.userRepository.remove(userToRemove);
  // }

  static async signIn(fields: any):Promise<ILoginResponse> {
    let userRepository = getRepository(User);
    const email = fields.email;
    //TODO: encrypt password if we have time
    const password = fields.password;
    const user = await userRepository
      .createQueryBuilder("user")
      .where("user.email = :email and user.password = :password", {
        email: email,
        password: password,
      })
      .getOne();
    if (user) {
      const data: userJWTType = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      let token = generateJWT(data).toString();
      let userInfo = decodeJWT(token);
      return({accessToken:token, userInfo: userInfo})
    } else {
      throw { status: 401, message: "User not found!" };
    }
  }

  static async decodeJWT(token: string) {
    return jwtDecode(token);
  }
}
