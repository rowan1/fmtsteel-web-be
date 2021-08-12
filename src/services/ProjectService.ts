import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Project } from "../entity/Project";
import { IProjectBody } from "../types/Interfaces";
import { saveFile } from "../helper/FileStorageHelper";
var fs = require('fs');

export class ProjectService {

  static async all() {
    let projectRepository = getRepository(Project);
    let projects = await projectRepository.find();
    return projects.map((project)=>{
      let path = project.path.split(/\s*,\s*/);
      return {...project, path:path};
    })    
  }

  static async one(projectID: any) {
    let projectRepository = getRepository(Project);
    let project = await projectRepository.findOne(projectID);
    let path = project.path.split(/\s*,\s*/);
    return {...project, path:path};
  }

  static async saveMultipleImageAndReturnPaths(files:any){
    let paths:string[]=[]
    
    for(let i=0;i<files.length;i++){
      let savedFile = await saveFile(files[i],"projects");
      paths.push(`/projects${savedFile}`);
    }
    return paths;
  }
  static async save(body: IProjectBody, files:any) {
    let projectRepository = getRepository(Project);
    let savedFiles = await this.saveMultipleImageAndReturnPaths(files.image);
    return projectRepository.save({title:body.title, description: body.description, path:savedFiles.toString()});
  }

  static async remove(projectID: any) {
    let projectRepository = getRepository(Project);
    let itemToRemove = await projectRepository.findOne(projectID);

    await projectRepository.remove(itemToRemove);
  }

  static async edit(projectID: any, body: IProjectBody, files:any) {
    let projectRepository = getRepository(Project);
    
    let editedBody:any = {title:body.title, description: body.description, path:body.path }
    if(files.image){
      let savedFiles = await this.saveMultipleImageAndReturnPaths(files.image);
      editedBody = {...editedBody, path:savedFiles.toString()};
    }
    await projectRepository.update(projectID,editedBody);
    return projectRepository.findOneOrFail(projectID);
  }
}
