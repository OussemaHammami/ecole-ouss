import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { getConnection } from "typeorm";
import { StudentAssignment } from '../student-assignment/student-assignment.entity';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) { }

  async findAllStudent(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findAllStudentByClasse(classId:number): Promise<Student[]> {
    const students = await getConnection()
    .createQueryBuilder()
    .select("student")
    .addSelect("student_id")
    .from(Student, "student")
    .innerJoin(StudentAssignment,"sa" ,"student.id = sa.student_id")
    .where("sa.classeId = :id", { id: classId })
    .getMany();
    return students;
  }

  create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }


  async update(id: number, student: Student): Promise<void> {
    await this.studentRepository.update(id, student);
  }

}
