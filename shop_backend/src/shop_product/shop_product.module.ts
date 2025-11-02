import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop_product } from './entity.shop_product';
import { ShopProductController } from './shop_product.controller';
import { ShopProductService } from './shop_product.service';

@Module( { 
    imports: [
    TypeOrmModule.forFeature([Shop_product])],
    controllers:  [ ShopProductController  ],
    providers: [ShopProductService ],
  })
export class ShopProductModule {}
