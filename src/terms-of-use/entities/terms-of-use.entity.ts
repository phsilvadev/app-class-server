import { Base } from 'src/common/entites/base.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('terms-of-use')
export class TermsOfUse extends Base {
  @Column()
  version: string;

  @Column()
  content: string;

  @ManyToMany(() => UserTermsOfUse, (key) => key.termsOfUse)
  userTermsOfUse?: UserTermsOfUse;
}
