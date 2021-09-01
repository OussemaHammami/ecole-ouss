import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>,
      ) {}
    
      async findAlladmin(): Promise<Admin[]> {
        return this.adminRepository.find();
      }
    
      create(admin: Admin): Promise<Admin> {
        return this.adminRepository.save(admin);
      }
    
      findOne(id: string): Promise<Admin> {
        return this.adminRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.adminRepository.delete(id);
      }
    
    
      async update(id: number ,admin: Admin): Promise<void> {
        await this.adminRepository.update(id, admin);
      }
}
