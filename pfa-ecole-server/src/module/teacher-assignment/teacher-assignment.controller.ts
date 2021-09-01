import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTeacherAssignmentDTO } from 'src/dto/teacher-assignment/create-teacherAssignment.dto';
import { TeacherAssignment } from './teacher-assignment.entity';
import { TeacherAssignmentService } from './teacher-assignment.service';

@Controller('teacher-assignment')
export class TeacherAssignmentController {
    constructor(private readonly teacherAssignmentService: TeacherAssignmentService) { }

    @Get()
    public async findAll() {
      const resp = await this.teacherAssignmentService.findAllTeacherAssignment();
      return resp;
    }

  @Post()
  public async create(@Body() createTeacherAssignmentRequest: CreateTeacherAssignmentDTO) {
    return this.teacherAssignmentService.create(createTeacherAssignmentRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TeacherAssignment> {
    return this.teacherAssignmentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teacherAssignmentService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() teacherAssignment: TeacherAssignment) {
    return this.teacherAssignmentService.update(+id, teacherAssignment);
  }
}

