import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";
var multipart = require('multiparty');
export class UserController {
  private userService = new UserService();

  // static all=async(request: Request, response: Response, next: NextFunction)=> {
  //   //delegating to the service class
  //   return await UserService.all(request, response, next);
  // }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.userService.one(request, response, next);
  // }

  // async save(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.userService.save(request, response, next);
  // }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.userService.remove(request, response, next);
  // }

  // static async getUsers(){
  //   return async(request: Request, response: Response, next: NextFunction)=>{
  //     response.send({message:"OK", status:200})
  //   }
  // }
  static async signIn(request: Request, response: Response, next: NextFunction) {
    //delegating to the service class
    
    var form = new multipart.Form();
      form.parse(request,async function(err:any, fields:any, files:any) {
        UserService.signIn(fields).then((res)=>{
          response.send({...res})
        }).catch((error)=>{
          next(error);
        })
      })
  }

  static async decodeJWT(request: Request, response: Response, next: NextFunction) {
    UserService.decodeJWT(request.headers.authorization).then((res)=>{
      response.send(res);
    }).catch((error)=>{
      next(error);
    })
  }
}
