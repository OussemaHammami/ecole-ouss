import { Module } from '@nestjs/common';
import { TeacherAssignmentService } from './teacher-assignment.service';
import { TeacherAssignmentController } from './teacher-assignment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherAssignment } from './teacher-assignment.entity';
import { Classe } from '../classe/classe.entity';
import { Teacher } from '../teacher/teacher.entity';
import { Subject } from '../subject/subject.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TeacherAssignment,Classe,Teacher,Subject])],
  providers: [TeacherAssignmentService],
  controllers: [TeacherAssignmentController]
})
export class TeacherAssignmentModule {}
