import { Base } from 'src/common/entites/base.entity';
import { Role } from 'src/role/entities/role.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User extends Base {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_active?: boolean;

  @ManyToOne(() => Role, (key) => key.user)
  role: Role;

  @ManyToOne(() => UserTermsOfUse, (key) => key.user)
  userTermsOfUse?: UserTermsOfUse;
}
