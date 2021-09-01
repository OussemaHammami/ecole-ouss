import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../student/student.entity'

@Entity()
export class Absence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  day: Date;

  @Column('time', {name: 'hourBegin'})
  hourBegin: Date;

  @Column('time', {name: 'hourEnd'})
  hourEnd: Date;

  @ManyToOne(type => Student, student => student.absences,{onDelete:'CASCADE'})
  @JoinColumn({name : 'student_id'})
  student: Student;

  @Column({ name: 'student_id' })
  studentId: number
  ;
  
}
