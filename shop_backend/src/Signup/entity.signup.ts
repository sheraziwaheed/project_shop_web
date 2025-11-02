import  {Column, Entity, PrimaryGeneratedColumn , } from "typeorm";

@Entity()
export class  Signup{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  firstName:string;
  
  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  

 
 
}