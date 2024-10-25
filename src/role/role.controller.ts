import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController implements OnModuleInit {
  constructor(private readonly roleService: RoleService) {}
  onModuleInit() {
    const names = [
      'user',
      'admin',
      'superAdmin',
      'support',
      'marketing',
      'teacher',
    ];

    for (const row of names) {
      this.roleService.create({ name: row });
    }
  }

  @Post()
  create(@Body() createGroupDto: CreateRoleDto) {
    return this.roleService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
