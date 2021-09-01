import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // gender: string;

  @Column({nullable : false})
  fullName: string;

  // @Column()
  // lastName: string;

  @Column({nullable : false , unique : true})
  email: string;

  @Column({nullable : false})
  password: string;

}

