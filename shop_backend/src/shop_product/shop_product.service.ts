import { Injectable } from '@nestjs/common';
import { Shop_product } from './entity.shop_product';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import  {Like } from "typeorm";

@Injectable()
export class ShopProductService{
    constructor(@InjectRepository(Shop_product) private shop_productRepositary: Repository <Shop_product>){}
    
    getdata(){
      return this.shop_productRepositary.find();
    }
   /* getdata(limit: number, page: number, query?: string) {
        const offset = (page - 1) * limit;
        const whereClause = query 
          ? { title: Like(`%${query}%`) } 
          : {}; // Use TypeORM's Like operator for search
        return this.shop_productRepositary.find({
          where: whereClause,
          skip: offset,
          take: limit,
        });
      }*/
    
    
    async getCategory(category: string) {
        return await this.shop_productRepositary.find({
          where: { category },
        });
      }
      
    async getId(id: number) {
        return await this.shop_productRepositary.findOne({where:{id},});
      }
    
    

     
savedata(image:string, title:string ,
     description:string , category:string , rating:number , price:number){ 
    const product = this.shop_productRepositary.create({
        image,
        title  ,
        description,
        category,
        rating,
        price
    });
    this.shop_productRepositary.save(product);

    return {message:" product added successfully" }}

    async updatedata(id:number,image:string, title:string ,
        description:string , category:string , rating:number , price:number){
        let product= await this.shop_productRepositary.findOne({where:{id}});
        if(!product){
            return {message: "product not found"}
        }
        product.image=image;
         product.title =title;
         product.description= description;
         product.category= category;
         product.rating= rating;
         product.price=price;

         this.shop_productRepositary.save(product);
        return {message:" product update successfully" }}

        
        async deleteproduct(id:number){
            let product= await this.shop_productRepositary.delete(id);
             
               if(!product){
                return {message: "product not delete"}
            }
            
            return {message:" product delete successfully" }
        
        }
}
