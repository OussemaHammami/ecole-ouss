import { Module } from '@nestjs/common';
import { StudentAssignmentService } from './student-assignment.service';
import { StudentAssignmentController } from './student-assignment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentAssignment } from './student-assignment.entity';
import { Student } from '../student/student.entity';
import { Classe } from '../classe/classe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentAssignment,Student,Classe])],
  providers: [StudentAssignmentService],
  controllers: [StudentAssignmentController]
})
export class StudentAssignmentModule {}
