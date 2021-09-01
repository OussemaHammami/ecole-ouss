import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Classroom } from "./classroom.entity";

export class ClassroomService {
    constructor(
        @InjectRepository(Classroom)
        private readonly classroomRepository: Repository<Classroom>,
      ) {}
    
      async findAllclassroom(): Promise<Classroom[]> {
        return this.classroomRepository.find();
      }
    
      create(classroom: Classroom): Promise<Classroom> {
        return this.classroomRepository.save(classroom);
      }
    
      findOne(id: string): Promise<Classroom> {
        return this.classroomRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.classroomRepository.delete(id);
      }
    
    
      async update(id: number ,classroom: Classroom): Promise<void> {
        await this.classroomRepository.update(id, classroom);
      }
}
