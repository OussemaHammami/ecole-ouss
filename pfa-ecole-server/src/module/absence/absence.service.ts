import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { StudentAssignment } from '../student-assignment/student-assignment.entity';
import { Absence } from './absence.entity';

@Injectable()
export class AbsenceService {
  constructor(
    @InjectRepository(Absence)
    private readonly absenceRepository: Repository<Absence>,
  ) {}

  async findAllAbsence(): Promise<Absence[]> {
    return this.absenceRepository.find();
  }

  async findAbsenceByDateAndHourAndClasse(d : Date , h1: Date,  h2: Date, classId:number): Promise<Absence[]> {
    const absences = await getConnection()
    .createQueryBuilder()
    .select("absence")
    .from(Absence, "absence")
    .innerJoinAndSelect(StudentAssignment, "sa","absence.studentId = sa.studentId")
    .where("absence.day = :date", { date: d })
    .andWhere("absence.hourBegin = :h1", { h1: h1 })
    .andWhere("absence.hourEnd = :h2", { h2: h2 })
    .andWhere("sa.classeId = :id", { id: classId })    
    .getMany();


    return absences;
  }

  create(absence: Absence): Promise<Absence> {
    return this.absenceRepository.save(absence);
  }

  findOne(id: string): Promise<Absence> {
    return this.absenceRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.absenceRepository.delete(id);
  }

  async update(id: number ,absence: Absence): Promise<void> {
    await this.absenceRepository.update(id, absence);
  }
}