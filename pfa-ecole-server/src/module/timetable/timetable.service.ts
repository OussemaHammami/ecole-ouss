import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timetable } from './timetable.entity';

@Injectable()
export class TimetableService {
    constructor(
        @InjectRepository(Timetable)
        private readonly timetableRepository: Repository<Timetable>,
      ) {}
    
      async findAlltimetable(): Promise<Timetable[]> {
        return this.timetableRepository.find();
      }
    
      create(timetable: Timetable): Promise<Timetable> {
        return this.timetableRepository.save(timetable);
      }
    
      findOne(id: string): Promise<Timetable> {
        return this.timetableRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.timetableRepository.delete(id);
      }
    
    
      async update(id: number ,timetable: Timetable): Promise<void> {
        await this.timetableRepository.update(id, timetable);
      }
}
