import { NextFunction, Request, Response } from "express";
import { CareerService } from "../services/CareerService";
var multipart = require('multiparty');

export class CareerController {

  static async all(request: Request, response: Response, next: NextFunction) {
    //delegating to the service class
    CareerService.all().then((res)=>{
      response.send({items:res})
    }).catch((error)=>{
      next(error);
    })
  }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.careerService.one(request, response, next);
  // }

  static async save(request: Request, response: Response, next: NextFunction) {
    //delegating to the service class
    var form = new multipart.Form();
      form.parse(request,async function(err:any, fields:any, files:any) {
        CareerService.save(fields, files).then((res)=>{
          response.send({message:"Your application is submitted successfully", status:200})
        }).catch((error)=>{
          next(error);
        })
      })
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   //delegating to the service class
  //   return await this.careerService.remove(request, response, next);
  // }
}
