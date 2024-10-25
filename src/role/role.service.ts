import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private groupRepository: Repository<Role>,
  ) {}

  async create(createGroupDto: CreateRoleDto): Promise<void> {
    await this.groupRepository.save(createGroupDto);
  }

  findAll() {
    return `This action returns all group`;
  }

  findOneName(name: string): Promise<Role> {
    return this.groupRepository.findOne({ where: { name: name } });
  }

  findOne(id: number) {
    return this.groupRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateGroupDto: UpdateRoleDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
