import { Module } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { TimetableController } from './timetable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timetable } from './timetable.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Timetable])],
  providers: [TimetableService],
  controllers: [TimetableController]
})
export class TimetableModule {}
