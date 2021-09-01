import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classe } from "../classe/classe.entity";
import { Subject } from "../subject/subject.entity";
import { Teacher } from "../teacher/teacher.entity";

@Entity()
export class TeacherAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Teacher,{onDelete:'CASCADE'})
  @JoinColumn({name : "teacher_id"})
  teacher: Teacher;

  @ManyToOne(type => Classe,{onDelete:'CASCADE'})
  @JoinColumn({name : "classe_id"})
  classe: Classe;

  @ManyToOne(type => Subject,{onDelete:'CASCADE'})
  @JoinColumn({name : "subject_id"})
  subject: Subject;

  @Column({ name: 'teacher_id' })
  teacherId: number;

  @Column({ name: 'classe_id' })
  classeId: number;

  @Column({ name: 'subject_id' })
  subjectId: number;

  
  @Column()
  schoolYear: number;
}
