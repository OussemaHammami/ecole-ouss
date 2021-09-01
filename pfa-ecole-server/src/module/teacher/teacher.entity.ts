import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryColumn()
  id: number;

  // @Column()
  // gender: string;

  @Column()
  firstName: string;

  // @Column()
  // lastName: string;

  @Column()
  login: string;

  @Column()
  password: string;


}
