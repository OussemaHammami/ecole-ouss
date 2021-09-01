import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) { }

    @Get()
    findAll(): Promise<Subject[]> {
    return this.subjectService.findAllSubject();
    }

    @Post()
    create(@Body() subject: Subject): Promise<Subject> {
    return this.subjectService.create(subject);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Subject> {
    return this.subjectService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
    return this.subjectService.remove(id);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() subject: Subject) {
    return this.subjectService.update(+id, subject);
    }
}
