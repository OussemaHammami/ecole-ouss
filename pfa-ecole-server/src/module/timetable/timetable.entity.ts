import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classe } from "../classe/classe.entity";
import { Classroom } from "../classroom/classroom.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Subject } from "../subject/subject.entity";

@Entity()
export class Timetable {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    day:string;

    @Column()
    hourBegin:number;

    @Column()
    hourEnd:number;

    @Column()
    shcoolYear:number;

    @ManyToOne(type => Teacher,{onDelete:'CASCADE',onUpdate:'CASCADE',nullable:true})
    @JoinColumn({name : 'teacher_id'})
    teacher : Teacher;

    @ManyToOne(type => Classe,{onDelete:'CASCADE',onUpdate:'CASCADE',nullable:true})
    @JoinColumn({name : 'classe_id'})
    classe : Classe;

    @ManyToOne(type => Classroom,{onDelete:'CASCADE',onUpdate:'CASCADE',nullable:true})
    @JoinColumn({name : 'classroom_id'})
    classroom : Classroom;

    @ManyToOne(type => Subject,{onDelete:'CASCADE',onUpdate:'CASCADE',nullable:true})
    @JoinColumn({name : 'subject_id'})
    subject : Subject;



    @Column({name : 'teacher_id'})
    teacherId: number;

    @Column({name: 'subject_id'})
    subjectId: number;

    @Column({name: 'classe_id'})
    classeId: number;

    @Column({name: 'classroom_id'})
    classroomId: number;

}
