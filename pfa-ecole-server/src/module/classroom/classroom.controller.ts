import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Classroom } from './classroom.entity';
import { ClassroomService } from './classroom.service';

@Controller('classroom')
export class ClassroomController {
    constructor(private readonly classroomService: ClassroomService) { }

    @Get()
    findAll(): Promise<Classroom[]> {
    return this.classroomService.findAllclassroom();
    }

    @Post()
    create(@Body() classroom: Classroom): Promise<Classroom> {
    return this.classroomService.create(classroom);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Classroom> {
    return this.classroomService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
    return this.classroomService.remove(id);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() classroom: Classroom) {
    return this.classroomService.update(+id, classroom);
    }

}
