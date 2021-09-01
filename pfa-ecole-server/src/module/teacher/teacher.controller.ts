import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTeacherDTO } from 'src/dto/teacher/create-teacher.dto';
import { UpdateTeacherDTO } from 'src/dto/teacher/update-teacher.dto';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) { }

  @Get()
  public async findAll() {
    const resp = await this.teacherService.findAllTeacher();
    return resp;
  }

  @Post()
  public async create(@Body() createTeacherRequest: CreateTeacherDTO){
    return this.teacherService.create(createTeacherRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teacherService.remove(id);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() teacher: Teacher) {
  //   return this.teacherService.update(+id, teacher);
  // }

  @Patch(':id')
  public async update(@Param('id') id: number, @Body() updateTeacherRequest: UpdateTeacherDTO) {
    const resp = await this.teacherService.update(+id, updateTeacherRequest);
    return resp;
  }
}
