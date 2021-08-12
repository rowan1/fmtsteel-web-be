import { NextFunction, Request, Response } from "express";
import { ClientService } from "../services/ClientService";
var multipart = require('multiparty');

export class ClientController {

  static async all(request: Request, response: Response, next: NextFunction) {
    ClientService.all().then((res)=>{
      response.send({items:res})
    }).catch((error)=>{
      next(error);
    })
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    var form = new multipart.Form();
    form.parse(request, async function(err:any, fields:any, files:any){
      ClientService.save(files).then((res)=>{
        response.send(res);
      }).catch((error)=>{
        next(error);
      })
    })
  }

  static async remove(request: Request, response: Response, next: NextFunction) {
    let id = parseInt(request.params.id);
    ClientService.remove(id).then((res)=>{
      response.send({message:"The Client is deleted Successfully!"})
    }).catch((error)=>{
      next(error);
    })
  }
}
