import { Controller,Get, Post, Body ,  BadRequestException } from '@nestjs/common';
import { SignupService } from './signup.service';
import { Signup } from './entity.signup';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Get()
  getdata(){
    //return "ooooooooooooo"}
return this.signupService.getdata();}

@Post()
async signuser(
  @Body('firstname') firstname: string,
  @Body('lastname') lastname: string,
  @Body('email') email: string,
  @Body('password') password: string, // Correct the typo here
) {
  const existingUser = await this.signupService.findByEmail(email);
  if (existingUser) {
    throw new BadRequestException('Email already in use');
  }
  const user = await this.signupService.createUser(firstname, lastname, email, password);
  return { message: 'User created successfully', Signup };
}

 
}



  


