import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './classroom.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Classroom])],
  providers: [ClassroomService],
  controllers: [ClassroomController]
})
export class ClassroomModule {}
