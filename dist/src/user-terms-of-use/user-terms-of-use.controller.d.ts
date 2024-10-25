import { UserTermsOfUseService } from './user-terms-of-use.service';
import { CreateUserTermsOfUseDto } from './dto/create-user-terms-of-use.dto';
import { UpdateUserTermsOfUseDto } from './dto/update-user-terms-of-use.dto';
export declare class UserTermsOfUseController {
    private readonly userTermsOfUseService;
    constructor(userTermsOfUseService: UserTermsOfUseService);
    create(createUserTermsOfUseDto: CreateUserTermsOfUseDto): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserTermsOfUseDto: UpdateUserTermsOfUseDto): string;
    remove(id: string): string;
}
