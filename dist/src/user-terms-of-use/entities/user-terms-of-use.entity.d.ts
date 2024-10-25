import { TermsOfUse } from 'src/terms-of-use/entities/terms-of-use.entity';
import { User } from 'src/user/entities/user';
export declare class UserTermsOfUse {
    id?: number;
    userId: number;
    terms_of_use_id: number;
    accepted_at?: Date;
    user?: User;
    termsOfUse?: TermsOfUse;
}
