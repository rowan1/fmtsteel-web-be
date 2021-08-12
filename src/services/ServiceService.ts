import { getRepository } from "typeorm";
import { Service } from "../entity/Service";
import { IServicesBody } from "../types/Interfaces";
import { saveFile } from "../helper/FileStorageHelper";
import { SubService } from "../entity/SubService";

export class ServiceService {

  static async saveMultipleImageAndReturnPaths(files:any){
    let paths:string[]=[]
    
    for(let i=0;i<files.length;i++){
      let savedFile = await saveFile(files[i],"services");
      paths.push(`/services${savedFile}`);
    }
    return paths;
  }

  static async all() {
    let serviceRepository = getRepository(Service);
    let result=[];
    let services = await serviceRepository.find();
    for(let i=0;i<services.length;i++){
      let service = services[i];
      let path = service.path? service.path.split(/\s*,\s*/):[];
      let subServices = await this.fetchSubServices(service.id); 
      result.push({...service, path:path, services:subServices});
    }
    return result;  
  }
  static async one(id:number) {
    let serviceRepository = getRepository(Service);
    let service = await serviceRepository.findOneOrFail(id);
    
    let path = service.path? service.path.split(/\s*,\s*/):[];
    let subServices = await this.fetchSubServices(service.id); 
    let result = {...service, path:path, services:subServices}
    
    return result;  
  }

  static async edit(id:number, body:IServicesBody, files:any) {
    let serviceRepository = getRepository(Service);
    let editedBody:any = {title:body.title, description: body.description, path:body.path }
    if(files.image && files.image.length){
      let savedFiles = await this.saveMultipleImageAndReturnPaths(files.image);
      editedBody = {...editedBody, path:savedFiles.toString()};
    }
    await serviceRepository.update(id,editedBody);
    return serviceRepository.findOneOrFail(id);
  }

  static async save(body:IServicesBody, files:any) {
    let serviceRepository = getRepository(Service);
    let savedFiles;
    let service:any = {title:body.title, description: body.description};
    if(files.image && files.image.length){
      savedFiles =  await this.saveMultipleImageAndReturnPaths(files.image);
      service = {...service, path: savedFiles.toString()}
    }
    
    return serviceRepository.save(service);
  }

  static async remove(id:number) {
    let serviceRepository = getRepository(Service);
    await this.removeSubServiceByServiceId(id);
    let itemToRemove = await serviceRepository.findOne(id);
    return await serviceRepository.remove(itemToRemove);
  }
  static async fetchSubServices(id:number){
    let serviceRepository = getRepository(SubService);
    let services = await serviceRepository.find({where:{serviceId:id}})
    return services.map((service)=>{
      let path = service.path? service.path.split(/\s*,\s*/):[];
      return {...service, path:path};
    })
  }
  static async removeSubService(id:number) {
    let serviceRepository = getRepository(SubService);
    let itemToRemove = await serviceRepository.findOne(id);
    return await serviceRepository.remove(itemToRemove);
  }
  static async removeSubServiceByServiceId(id:number) {
    let serviceRepository = getRepository(SubService);
    let itemsToRemove = await serviceRepository.find({serviceId:id});
    return itemsToRemove.map(async(itemToRemove)=>{
      return await serviceRepository.remove(itemToRemove);
    })
  }
  static async saveSubService(body:IServicesBody, files:any, serviceId:number) {
    let serviceRepository = getRepository(SubService);
    let service:any = {title:body.title, description: body.description, serviceId:serviceId};
    let savedFiles;
    if(files.image && files.image.length){
      savedFiles = await this.saveMultipleImageAndReturnPaths(files.image);
      service = {...service, path: savedFiles.toString()}
    }

    return serviceRepository.save(service);
  }
}
