import { getRepository } from "typeorm";
import { Client } from "../entity/Client";
import { saveFile, deleteFile } from "../helper/FileStorageHelper";
var fs = require('fs');

export class ClientService {

  static async all() {
    try{
      let clientRepository = getRepository(Client);
      let clients = await clientRepository.find();
      return clients.map((client)=>{
        return{
          id: client.id,
          path: client.path,
        }
      })
    }catch(error){
      throw error;
    }
    
  }

  static async save(files:any) {
    try{
      let clientRepository = getRepository(Client);
      let savedFile = await saveFile(files.image[0],"clients");
      return await clientRepository.save({path:`/clients${savedFile}`});
    }catch(error){
      throw error;
    }
  }

  static async remove(id:number) {
    try{
      let clientRepository = getRepository(Client);
      let itemToRemove = await clientRepository.findOne(id);
      await deleteFile(itemToRemove.path)
      return await clientRepository.remove(itemToRemove);
    }catch(error){
      throw error;
    }
  }
}
