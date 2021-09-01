import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './module/student/student.module';
import { Student } from './module/student/student.entity';
import { AbsenceModule } from './module/absence/absence.module';
import { Absence } from './module/absence/absence.entity';
import { ClasseModule } from './module/classe/classe.module';
import { Classe } from './module/classe/classe.entity';
import { StudentAssignmentModule } from './module/student-assignment/student-assignment.module';
import { StudentAssignment } from './module/student-assignment/student-assignment.entity';
import { TeacherModule } from './module/teacher/teacher.module';
import { SubjectModule } from './module/subject/subject.module';
import { TeacherAssignmentModule } from './module/teacher-assignment/teacher-assignment.module';
import { Teacher } from './module/teacher/teacher.entity';
import { Subject } from './module/subject/subject.entity';
import { TeacherAssignment } from './module/teacher-assignment/teacher-assignment.entity';
import { ClassroomModule } from './module/classroom/classroom.module';
import { TimetableModule } from './module/timetable/timetable.module';
import { AdminModule } from './module/admin/admin.module';
 
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StudentModule,
    AbsenceModule,
    ClasseModule,
    StudentAssignmentModule,
    TeacherModule,
    SubjectModule,
    TeacherAssignmentModule,
    ClassroomModule,
    TimetableModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService, Student,Absence,Classe,StudentAssignment,Teacher,Subject,TeacherAssignment],
})
export class AppModule {}

