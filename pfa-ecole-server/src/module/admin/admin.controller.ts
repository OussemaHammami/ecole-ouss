import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Admin } from './admin.entity';

import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminService.findAlladmin();
  }

  @Post()
  create(@Body() admin: Admin): Promise<Admin> {
    return this.adminService.create(admin);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Admin> {
    return this.adminService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.adminService.remove(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() admin: Admin) {
    return this.adminService.update(+id, admin);
  }
}
