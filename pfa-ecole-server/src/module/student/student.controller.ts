import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAllStudent();
  }

  @Get('/classe/:id')
  findAllByClasse(@Param('id') id: number): Promise<Student[]> {
    return this.studentService.findAllStudentByClasse(id);
  }


  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() student: Student) {
    return this.studentService.update(+id, student);
  }
}