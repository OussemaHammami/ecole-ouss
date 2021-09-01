import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbsenceController } from './absence.controller';
import { Absence } from './absence.entity';
import { AbsenceService } from './absence.service';

@Module({
  imports: [TypeOrmModule.forFeature([Absence])],
  providers: [AbsenceService],
  controllers: [AbsenceController]
})
export class AbsenceModule {}