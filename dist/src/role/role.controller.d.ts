import { OnModuleInit } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController implements OnModuleInit {
    private readonly roleService;
    constructor(roleService: RoleService);
    onModuleInit(): void;
    create(createGroupDto: CreateRoleDto): Promise<void>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/role.entity").Role>;
    update(id: string, updateGroupDto: UpdateRoleDto): string;
    remove(id: string): string;
}
