import { NextFunction, Request, Response } from "express";
import { ContactService } from "../services/ContactService";
var multipart = require('multiparty');

export class ContactController {

  // async all(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.contactService.all(request, response, next);
  // }

  static async one(request: Request, response: Response, next: NextFunction) {
    ContactService.one().then((result)=>{
      response.send({items:result[0]})
    }).catch((error)=>{
      next(error);      
    })
  }

  static async save(request: Request, response: Response, next: NextFunction) {

    var form = new multipart.Form();
      form.parse(request,async function(err:any, fields:any, files:any) {
        ContactService.save(fields).then((result)=>{
          response.send({items:result})
        }).catch((error)=>{
          next(error);      
        })
      })
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.contactService.remove(request, response, next);
  // }
}
