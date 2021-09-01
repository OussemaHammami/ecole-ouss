import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Absence } from './absence.entity';
import { AbsenceService } from './absence.service';

@Controller('absences')
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) { }

  @Get()
  findAll(): Promise<Absence[]> {
    return this.absenceService.findAllAbsence();
  }

/**
 * 
 * @param d date 
 * @param h1 hourBegin
 * @param h2 hourEnd
 * @param c classId
 * @returns 
 */

  @Get(':d/:h1/:h2/:c')
  findAbsenceByDateAndHourAndClasse(
      @Param('d') d: Date,
      @Param('h1') h1: Date,
      @Param('h2') h2: Date,
      @Param('c') c: number
      ): Promise<Absence[]> {
    return this.absenceService.findAbsenceByDateAndHourAndClasse(d,h1,h2,c);
  }



  @Post()
  create(@Body() absence: Absence): Promise<Absence> {
    return this.absenceService.create(absence);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Absence> {
    return this.absenceService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.absenceService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() absence: Absence) {
    return this.absenceService.update(+id, absence);
  }
}
