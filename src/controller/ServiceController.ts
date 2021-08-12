import { NextFunction, Request, Response } from "express";
import { ServiceService } from "../services/ServiceService";
var multipart = require('multiparty');

export class ServiceController {

  static async all(request: Request, response: Response, next: NextFunction) {
    ServiceService.all().then((res)=>{
      response.send({items: res})
    }).catch((error)=>{
      next(error)
    })
  }
  static async one(request: Request, response: Response, next: NextFunction) {
    let id = parseInt(request.params.id);
    ServiceService.one(id).then((res)=>{
      response.send({items: [res]})
    }).catch((error)=>{
      next(error)
    })
  }

  static async edit(request: Request, response: Response, next: NextFunction) {
    let id = parseInt(request.params.id);
    var form = new multipart.Form();
    form.parse(request,async function(err:any, fields:any, files:any) {
      ServiceService.edit(id, fields, files).then((res)=>{
        response.send(res)
      }).catch((error)=>{
        next(error)
      })
    })
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    var form = new multipart.Form();
      form.parse(request,async function(err:any, fields:any, files:any) {
      ServiceService.save(fields, files).then((res)=>{
        response.send(res)
      }).catch((error)=>{
        next(error)
      })
    })
  }

  static async remove(request: Request, response: Response, next: NextFunction) {
    let id = parseInt(request.params.id);
    ServiceService.remove(id).then((res)=>{
      response.send({message:"The service is deleted Successfully!"})
    }).catch((error)=>{
      next(error)
    })
  }

  static async saveSubService(request: Request, response: Response, next: NextFunction){
    var form = new multipart.Form();
    let serviceId = parseInt(request.params.serviceId);
    form.parse(request,async function(err:any, fields:any, files:any) {
    ServiceService.saveSubService(fields, files, serviceId).then((res)=>{
      response.send(res)
    }).catch((error)=>{
      next(error)
    })
  })
  }
  static async removeSubService(request: Request, response: Response, next: NextFunction){
    let id = parseInt(request.params.id);
    ServiceService.removeSubService(id).then((res)=>{
      response.send({message:"The sub service is deleted Successfully!"})
    }).catch((error)=>{
      next(error)
    })
  }
  static async fetchSubServices(request: Request, response: Response, next: NextFunction){
    let id = parseInt(request.params.id);
    ServiceService.fetchSubServices(id).then((res)=>{
      response.send({items:res})
    }).catch((error)=>{
      next(error)
    })
  }
}
