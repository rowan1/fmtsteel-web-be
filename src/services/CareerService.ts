import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Career } from "../entity/Career";
var fs = require('fs');

export class CareerService {
  private careerRepository = getRepository(Career);

  static async all() {
    let careerRepository = getRepository(Career);
    try{
      return careerRepository.find();
    }catch(error){
      throw error;
    }
    
  }

  // async one(request: Request, response: Response, next: NextFunction) {
  //   return this.careerRepository.findOne(request.params.id);
  // }

  static async save(fields:any, files:any):Promise<any> {
    let careerRepository = getRepository(Career);
    try {
      let file = fs.readFileSync(files.resumeFile[0].path);
      return careerRepository.save({
        name: fields.name,
        email: fields.email,
        dateOfBirth: fields.dateOfBirth,
        gender: fields.gender,
        martialStatus: fields.martialStatus,
        militaryStatus: fields.militaryStatus,
        resumeFileName: fields.resumeFileName,
        resumeFile: file,
        phone: fields.phone
      });
    }catch(error){
      throw error;
    }
  }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //   let itemToRemove = await this.careerRepository.findOne(request.params.id);
  //   await this.careerRepository.remove(itemToRemove);
  // }
}
