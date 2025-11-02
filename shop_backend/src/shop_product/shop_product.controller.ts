import { Controller, Get , Post, Body, Delete, Put , Param } from '@nestjs/common';
import { ShopProductService } from './shop_product.service';
import { Query } from '@nestjs/common';
@Controller('shop_product')
export class ShopProductController {
  constructor(private readonly ShopProductService :ShopProductService ){}

 
  @Get()
  getdata(){
    return this.ShopProductService.getdata();
  }

  /*@Get()
  getdata(@Query('limit') limit = 9, @Query('page') page = 1, @Query('query') query?: string) {
    return this.ShopProductService.getdata(+limit, +page, query);
  }*/
  
@Get(':category') // Endpoint: /shop_product/:category
async getCategory(@Param('category') category: string) {
  return await this.ShopProductService.getCategory(category);
}

@Get(':id/:id')  
async getId(@Param('id') id:number) {
  return await this.ShopProductService.getId(id);
}

@Post()
savedata(@Body ('image') image: string,
@Body ('title') title: string,
@Body ('description') description : string,
@Body ('category') category: string,
@Body ('rating') rating: number,
@Body ('price')   price: number
){
    return  this.ShopProductService.savedata( image, title, description ,category, rating ,price );
    }

    @Put(":id")
    updatedata ( 
   @Param ("id") id:number,
   @Body ('image') image: string,
   @Body ('title') title: string,
   @Body ('description') description : string,
   @Body ('category') category: string,
   @Body ('rating') rating: number,
   @Body ('price')   price: number){
         return  this.ShopProductService.updatedata(id,image, title, description ,category, rating ,price)
    }
    @Delete(":id")
    deleteproduct( @Param ("id") id:number){
        return this.ShopProductService.deleteproduct(id);

    } 
}
