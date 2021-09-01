import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentAssignment } from './student-assignment.entity';

@Injectable()
export class StudentAssignmentService {
    constructor(
        @InjectRepository(StudentAssignment)
        private readonly studentAssignmentRepository: Repository<StudentAssignment>,
      ) {}
    
      async findAllStudentAssignment(): Promise<StudentAssignment[]> {
        return this.studentAssignmentRepository.find();
      }
    
      create(studentAssignment: StudentAssignment): Promise<StudentAssignment> {
        return this.studentAssignmentRepository.save(studentAssignment);
      }
    
      findOne(id: string): Promise<StudentAssignment> {
        return this.studentAssignmentRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.studentAssignmentRepository.delete(id);
      }

      async update(id: number ,studentAssignment: StudentAssignment): Promise<void> {
        await this.studentAssignmentRepository.update(id, studentAssignment);
      }
}

