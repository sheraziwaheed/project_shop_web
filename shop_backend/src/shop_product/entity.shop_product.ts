import  {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class  Shop_product{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  image:string;
  
  @Column()
  title: string;

  @Column()
  description:string;

  @Column()
  category :string;

  @Column()
  rating:number;

  @Column('float')  
  price: number;
}