import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Absence } from '../absence/absence.entity';
import { Classe } from '../classe/classe.entity';



@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  sexe: number;

  @Column()
  date: Date;

  @OneToMany(type => Absence, absence => absence.student)
  absences: Absence[];
  
}

