import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Signup } from './entity.signup';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';

@Module({ 
    imports: [
    TypeOrmModule.forFeature([ Signup])],
    controllers:  [ SignupController  ],
    providers:  [SignupService],
  })
export class SignupModule {}
