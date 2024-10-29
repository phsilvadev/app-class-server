import { Base } from 'src/common/entites/base.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('terms-of-use')
export class TermsOfUse extends Base {
  @Column()
  version: string;

  @Column()
  content: string;

  @OneToMany(
    () => UserTermsOfUse,
    (userTermsOfUse) => userTermsOfUse.termsOfUse,
  )
  userTermsOfUse?: UserTermsOfUse[];
}
