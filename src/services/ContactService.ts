import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Contact } from "../entity/Contact";
import { IContactsBody } from "../types/Interfaces";

export class ContactService {
  private contactRepository = getRepository(Contact);

  // async all(request: Request, response: Response, next: NextFunction) {
  //   return this.contactRepository.find();
  // }

  static async one() {
    let contactRepository = getRepository(Contact);
    try{
      return contactRepository.find();
    }catch(error){
      throw error;
    }
  }

  static async save(body:IContactsBody) {
    console.log(body)
    let contactRepository = getRepository(Contact);
    try{
      if(body.id !== undefined){
        let id = parseInt(body.id.toString())
        await contactRepository.update(id,{email: body.email,
          address: body.address,
          phone: body.phone});
          return await contactRepository.findOneOrFail({where:{id:id}});
      }

      return await contactRepository.save({
        email: body.email,
        address: body.address,
        phone: body.phone
      });
    }catch(error){
      throw error;
    }
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let itemToRemove = await this.contactRepository.findOne(request.params.id);
  //   await this.contactRepository.remove(itemToRemove);
  // }
}
