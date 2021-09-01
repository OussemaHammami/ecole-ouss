import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Timetable } from './timetable.entity';
import { TimetableService } from './timetable.service';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) { }

  @Get()
  findAll(): Promise<Timetable[]> {
    return this.timetableService.findAlltimetable();
  }

  @Post()
  create(@Body() timetable: Timetable): Promise<Timetable> {
    return this.timetableService.create(timetable);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Timetable> {
    return this.timetableService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.timetableService.remove(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() timetable: Timetable) {
    return this.timetableService.update(+id, timetable);
  }
}
