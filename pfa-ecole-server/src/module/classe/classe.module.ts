import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Classe} from './classe.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Classe])],
  providers: [ClasseService],
  controllers: [ClasseController]
})
export class ClasseModule {}
