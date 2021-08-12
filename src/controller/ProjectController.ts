import { NextFunction, Request, Response } from "express";
import { ProjectService } from "../services/ProjectService";
var multipart = require('multiparty');

export class ProjectController {

  static async all(request: Request, response: Response, next: NextFunction) {
    ProjectService.all().then((res)=>{
      response.send({items: res})
    }).catch((error)=>{
      next(error)
    })
  }

  static async edit(request: Request, response: Response, next: NextFunction) {
    
    let id = request.params.id 
    var form = new multipart.Form();
    form.parse(request, async function(err:any, fields:any, files:any){
      ProjectService.edit(id, fields, files).then((res)=>{
        response.send(res)
      }).catch((error)=>{
        next(error);
      })
    })
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    var form = new multipart.Form();
    form.parse(request, async function(err:any, fields:any, files:any){
      ProjectService.save(fields, files).then((res)=>{
        response.send(res);
      }).catch((error)=>{
        next(error);
      })
    })
  }

  static async remove(request: Request, response: Response, next: NextFunction) {
    let id = request.params.id 
    ProjectService.remove(id).then((res)=>{
      response.send({message:"The project is deleted Successfully!"})
    }).catch((error)=>{
      next(error)
    })
  }
}
