import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private groupRepository;
    constructor(groupRepository: Repository<Role>);
    create(createGroupDto: CreateRoleDto): Promise<void>;
    findAll(): string;
    findOneName(name: string): Promise<Role>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateGroupDto: UpdateRoleDto): string;
    remove(id: number): string;
}
