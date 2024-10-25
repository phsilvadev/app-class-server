import { Base } from 'src/common/entites/base.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
export declare class TermsOfUse extends Base {
    version: string;
    content: string;
    userTermsOfUse?: UserTermsOfUse;
}
