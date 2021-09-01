import {PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, Column, ManyToOne } from "typeorm";
import { Classe } from "../classe/classe.entity";
import { Student } from "../student/student.entity";

@Entity()
export class StudentAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Student,{onDelete:'CASCADE'})
  @JoinColumn({name : "student_id"})
  student: Student;

  @ManyToOne(type => Classe,{onDelete:'CASCADE'})
  @JoinColumn({name : "classe_id"})
  classe: Classe;

  @Column({ name: 'student_id' })
  studentId: number;

  @Column({ name: 'classe_id' })
  classeId: number;
}
