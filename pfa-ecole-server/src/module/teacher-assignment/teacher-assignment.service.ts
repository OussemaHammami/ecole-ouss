import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeacherAssignmentDTO } from 'src/dto/teacher-assignment/create-teacherAssignment.dto';
import { TeacherAssignmentDTO } from 'src/dto/teacher-assignment/teacherAssignment.dto';
import { UpdateTeacherAssignmentDTO } from 'src/dto/teacher-assignment/update-teacherAssignment.dto';
import { Repository } from 'typeorm';
import { TeacherAssignment } from './teacher-assignment.entity';

@Injectable()
export class TeacherAssignmentService {
    constructor(
        @InjectRepository(TeacherAssignment)
        private readonly teacherAssignmentRepository: Repository<TeacherAssignment>,
      ) {}

      public async create(createTeacherAssignmentReaquest: CreateTeacherAssignmentDTO){
        const teacherAssignment: TeacherAssignment = new TeacherAssignment();
        teacherAssignment.id = createTeacherAssignmentReaquest.id;
        teacherAssignment.teacherId = createTeacherAssignmentReaquest.teacherId;
        teacherAssignment.classeId = createTeacherAssignmentReaquest.classeId;
        teacherAssignment.subjectId = createTeacherAssignmentReaquest.subjectId;

        await this.teacherAssignmentRepository.save(teacherAssignment);

        const teacherAssignmentDTO = this.entityToDTO(teacherAssignment);

        return teacherAssignmentDTO;
      }

      private entityToDTO(teacherAssignment: TeacherAssignment): TeacherAssignmentDTO {
        const teacherAssignmentDTO = new TeacherAssignmentDTO();
        teacherAssignmentDTO.teacherId = teacherAssignment.teacherId;
        teacherAssignmentDTO.classeId = teacherAssignment.classeId;
        teacherAssignmentDTO.subjectId = teacherAssignment.subjectId;

        return teacherAssignmentDTO;
      }

    
      public async findAllTeacherAssignment(){
        const teachers: TeacherAssignment[] = await this.teacherAssignmentRepository.find();
        const teacherAssignmentsDTO: TeacherAssignmentDTO[] = teachers.map(x => this.entityToDTO(x));
        return teacherAssignmentsDTO ;
      }
      
    
      findOne(id: number): Promise<TeacherAssignment> {
        return this.teacherAssignmentRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.teacherAssignmentRepository.delete(id);
      }

      public async update(teacherAssignmentId: number ,updateTeacherAssignmentRequest: UpdateTeacherAssignmentDTO) {
        const teacherAssignment: TeacherAssignment = await this.findOne(teacherAssignmentId);
        teacherAssignment.id= updateTeacherAssignmentRequest.id || teacherAssignment.id;
        teacherAssignment.teacherId= updateTeacherAssignmentRequest.teacherId || teacherAssignment.teacherId;
        teacherAssignment.classeId= updateTeacherAssignmentRequest.classeId || teacherAssignment.classeId;
        teacherAssignment.subjectId= updateTeacherAssignmentRequest.subjectId || teacherAssignment.subjectId;

        await this.teacherAssignmentRepository.save(teacherAssignment)

        const teacherAssignmentDTO: TeacherAssignmentDTO = this.entityToDTO(teacherAssignment);

        return teacherAssignmentDTO;;
      }
}
