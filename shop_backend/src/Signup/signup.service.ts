 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 
import * as bcrypt from 'bcrypt';
import { Signup } from './entity.signup';



@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(Signup)
    private signupRepository: Repository<Signup>) {}
 
    getdata(){
  return this.signupRepository.find();
 // return "hbddddddddddddddj "
 }


 async createUser(firstName: string , lastname: string ,email: string, password: string,  ): Promise<Signup> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user =  this.signupRepository.create({ firstName, lastname ,email, password: hashedPassword });
  return this. signupRepository.save(user);
}

async findByEmail(email: string): Promise<Signup | undefined> {
  return this.signupRepository.findOne({ where: { email } });
}
}

