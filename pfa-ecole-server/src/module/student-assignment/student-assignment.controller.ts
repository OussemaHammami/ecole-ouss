import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentAssignment } from './student-assignment.entity';
import { StudentAssignmentService } from './student-assignment.service';

@Controller('student-assignment')
export class StudentAssignmentController {
    constructor(private readonly studentAssignmentService: StudentAssignmentService) { }

  @Get()
  findAll(): Promise<StudentAssignment[]> {
    return this.studentAssignmentService.findAllStudentAssignment();
  }

  @Post()
  create(@Body() studentAssignment: StudentAssignment): Promise<StudentAssignment> {
    return this.studentAssignmentService.create(studentAssignment);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<StudentAssignment> {
    return this.studentAssignmentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentAssignmentService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() studentAssignment: StudentAssignment) {
    return this.studentAssignmentService.update(+id, studentAssignment);
  }
}
