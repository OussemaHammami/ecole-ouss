import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classe {
   
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level : number;

  @Column()
  name: string;

  @Column()
  nb: number;

  @Column()
  schoolYear: string;

}

