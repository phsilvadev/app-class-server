import { CreateUserTermsOfUseDto } from './dto/create-user-terms-of-use.dto';
import { UpdateUserTermsOfUseDto } from './dto/update-user-terms-of-use.dto';
import { Repository } from 'typeorm';
import { UserTermsOfUse } from './entities/user-terms-of-use.entity';
export declare class UserTermsOfUseService {
    private userTermsOfUseRepository;
    constructor(userTermsOfUseRepository: Repository<UserTermsOfUse>);
    create(createUserTermsOfUseDto: CreateUserTermsOfUseDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserTermsOfUseDto: UpdateUserTermsOfUseDto): string;
    remove(id: number): string;
}
