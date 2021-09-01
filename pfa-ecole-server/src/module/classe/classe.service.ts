import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClasseDTO } from 'src/dto/classe/classe.dto';
import { CreateClasseDTO } from 'src/dto/classe/create-classe-dto';
import { UpdateClasseDTO } from 'src/dto/classe/update-teacher.dto';
import { Repository } from 'typeorm';
import { Student } from '../student/student.entity';
import { Classe } from './classe.entity';

@Injectable()
export class ClasseService {
    constructor(
      @InjectRepository(Classe)
      private readonly ClasseRepository: Repository<Classe>,
    ) {}
  
  
    public async create(createClasseReaquest: CreateClasseDTO){
      const classe: Classe = new Classe();
      classe.name = createClasseReaquest.name;
      classe.level = createClasseReaquest.level;
      classe.nb = createClasseReaquest.nb;
      classe.schoolYear = createClasseReaquest.schoolYear;

      await this.ClasseRepository.save(classe);

      const classeDTO = this.entityToDTO(classe);

      return classeDTO;
    }

    private entityToDTO(classe: Classe): ClasseDTO {
      const classeDTO = new ClasseDTO();
      classeDTO.id = classe.id;
      classeDTO.name = classe.name;
      classeDTO.level = classe.level;
      classeDTO.nb = classe.nb;
      classeDTO.schoolYear = classe.schoolYear;

      return classeDTO;
    }

    public async findAllClasse(){
      const Classes: Classe[] = await this.ClasseRepository.find();
      const ClassesDTO: ClasseDTO[] = Classes.map(x => this.entityToDTO(x));
      return ClassesDTO ;
    }



    // async findAllClasse(): Promise<Classe[]> {
    //   return this.ClasseRepository.find();
    // }

    // create(Classe: Classe): Promise<Classe> {
    //   return this.ClasseRepository.save(Classe);
    // }
  
    findOne(id: number): Promise<Classe> {
      return this.ClasseRepository.findOne(id);
    }
  
    async remove(id: string): Promise<void> {
      await this.ClasseRepository.delete(id);
    }
  
  
    // async update(id: number ,Classe: Classe): Promise<void> {
    //   await this.ClasseRepository.update(id, Classe);
    // }

    public async update(classeId: number ,updateClasseRequest: UpdateClasseDTO) {
      const classe: Classe = await this.findOne(classeId);
      classe.id= updateClasseRequest.id || classe.id;
      classe.level= updateClasseRequest.level || classe.level;
      classe.name= updateClasseRequest.name || classe.name;
      classe.schoolYear= updateClasseRequest.schoolYear || classe.schoolYear;
      classe.nb= updateClasseRequest.nb || classe.nb;


      await this.ClasseRepository.save(classe)

      const classeDTO: ClasseDTO = this.entityToDTO(classe);

      return classeDTO;
    }


    

}

