import { Repository } from 'typeorm';
import { User } from './entities/user';
import { SingUpAuthDto } from '../auth/dto/sing-up-auth.dto';
import { RoleService } from '../role/role.service';
import { UserTermsOfUseService } from 'src/user-terms-of-use/user-terms-of-use.service';
import { TermsOfUseService } from 'src/terms-of-use/terms-of-use.service';
export declare class UserService {
    private userRepository;
    private roleService;
    private userTermsOfUseService;
    private termsOfUseService;
    constructor(userRepository: Repository<User>, roleService: RoleService, userTermsOfUseService: UserTermsOfUseService, termsOfUseService: TermsOfUseService);
    findOneEmail(email: string): Promise<User>;
    createUser(singUpAuthDto: SingUpAuthDto): Promise<void>;
    findOneById(id: number): Promise<User>;
}
