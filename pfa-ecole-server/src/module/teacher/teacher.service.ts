import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeacherDTO } from 'src/dto/teacher/create-teacher.dto';
import { TeacherDTO } from 'src/dto/teacher/teacher.dto';
import { UpdateTeacherDTO } from 'src/dto/teacher/update-teacher.dto';
import { Repository } from 'typeorm';
import { Teacher } from './teacher.entity';


@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
      ) {}
    
    
      public async create(createTeacherReaquest: CreateTeacherDTO){
        const teacher: Teacher = new Teacher();
        teacher.id = createTeacherReaquest.id;
        teacher.firstName = createTeacherReaquest.firstName;
        teacher.login = createTeacherReaquest.login;
        teacher.password = createTeacherReaquest.password;

        await this.teacherRepository.save(teacher);

        const teacherDTO = this.entityToDTO(teacher);

        return teacherDTO;
      }

      private entityToDTO(teacher: Teacher): TeacherDTO {
        const teacherDTO = new TeacherDTO();
        teacherDTO.id = teacher.id;
        teacherDTO.firstName = teacher.firstName;
        teacherDTO.login = teacher.login;
        teacherDTO.password = teacher.password;

        return teacherDTO;
      }

      public async findAllTeacher(){
        const teachers: Teacher[] = await this.teacherRepository.find();
        const teachersDTO: TeacherDTO[] = teachers.map(x => this.entityToDTO(x));
        return teachersDTO ;
      }

      // async findAllTeacher(): Promise<Teacher[]> {
      //   return this.teacherRepository.find();
      // }

      // create(teacher: Teacher): Promise<Teacher> {
      //   return this.teacherRepository.save(teacher);
      // }
    
      findOne(id: number): Promise<Teacher> {
        return this.teacherRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.teacherRepository.delete(id);
      }
    
    
      // async update(id: number ,teacher: Teacher): Promise<void> {
      //   await this.teacherRepository.update(id, teacher);
      // }

      public async update(teacherId: number ,updateTeacherRequest: UpdateTeacherDTO) {
        const teacher: Teacher = await this.findOne(teacherId);
        teacher.id= updateTeacherRequest.id || teacher.id;
        teacher.firstName= updateTeacherRequest.firstName || teacher.firstName;
        teacher.password= updateTeacherRequest.password || teacher.password;
        teacher.login= updateTeacherRequest.login || teacher.login;

        await this.teacherRepository.save(teacher)

        const teacherDTO: TeacherDTO = this.entityToDTO(teacher);

        return teacherDTO;;
      }
}
