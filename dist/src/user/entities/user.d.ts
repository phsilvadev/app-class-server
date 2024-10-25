import { Base } from 'src/common/entites/base.entity';
import { Role } from 'src/role/entities/role.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
export declare class User extends Base {
    name: string;
    email: string;
    password: string;
    cip?: string;
    is_active?: boolean;
    role: Role;
    userTermsOfUse?: UserTermsOfUse[];
}
