import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateClasseDTO } from 'src/dto/classe/create-classe-dto';
import { UpdateClasseDTO } from 'src/dto/classe/update-teacher.dto';
import { Classe } from './classe.entity';
import { ClasseService } from './classe.service';

@Controller('classes')
export class ClasseController {
    constructor(private readonly classeService: ClasseService) { }

    @Get()
    public async findAll() {
      const resp = await this.classeService.findAllClasse();
      return resp;
    }
  
    @Post()
  public async create(@Body() createClasseRequest: CreateClasseDTO){
    return this.classeService.create(createClasseRequest);
  }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Classe> {
      return this.classeService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.classeService.remove(id);
    }

    @Patch(':id')
  public async update(@Param('id') id: number, @Body() updateClasseRequest: UpdateClasseDTO) {
    const resp = await this.classeService.update(+id, updateClasseRequest);
    return resp;
  }
}
