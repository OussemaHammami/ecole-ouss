import { InjectRepository } from "@nestjs/typeorm";
import { CreateSubjectDTO } from "src/dto/subject/create-subject.dto";
import { SubjectDTO } from "src/dto/subject/subject.dto";
import { Repository } from "typeorm";
import { Subject } from "./subject.entity";

export class SubjectService {
    constructor(
        @InjectRepository(Subject)
        private readonly subjectRepository: Repository<Subject>,
      ) {}


      public async create(createSubjectReaquest: CreateSubjectDTO){
        const subject: Subject = new Subject();
        subject.id = createSubjectReaquest.id;
        subject.name = createSubjectReaquest.name;
        subject.level = createSubjectReaquest.level;

        await this.subjectRepository.save(subject);

        const subjectDTO = this.entityToDTO(subject);

        return subjectDTO;
      }

      private entityToDTO(subject: Subject): SubjectDTO {
        const subjectDTO = new SubjectDTO();
        subjectDTO.id = subject.id;
        subjectDTO.name = subject.name;
        subjectDTO.level = subject.level;

        return subjectDTO;
      }



    
      public async findAllSubject(){
        const subjects: Subject[] = await this.subjectRepository.find();
        const subjectsDTO: SubjectDTO[] = subjects.map(x => this.entityToDTO(x));
        return subjectsDTO ;
      }
    
      findOne(id: string): Promise<Subject> {
        return this.subjectRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.subjectRepository.delete(id);
      }
    
    
      async update(id: number ,subject: Subject): Promise<void> {
        await this.subjectRepository.update(id, subject);
      }
}
