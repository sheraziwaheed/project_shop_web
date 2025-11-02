import { Module } from '@nestjs/common';
import { ShopProductModule } from './shop_product/shop_product.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Shop_product } from './shop_product/entity.shop_product';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { SignupModule } from './signup/signup.module';
import { Signup } from './signup/entity.signup';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shop_web',
      entities: [Shop_product,Signup],
      synchronize: true, 
    }),ShopProductModule, SignupModule],
  controllers: [ ],
  providers: [ ],
})
export class AppModule {}
