import { TermsOfUse } from 'src/terms-of-use/entities/terms-of-use.entity';
import { User } from 'src/user/entities/user';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user-terms-of-use')
export class UserTermsOfUse {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  userId: number;

  @Column()
  terms_of_use_id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  accepted_at?: Date;

  @JoinColumn({ name: 'userId' })
  @OneToMany(() => User, (key) => key.userTermsOfUse)
  user?: User;

  @JoinColumn({ name: 'terms_of_use_id' })
  @OneToMany(() => TermsOfUse, (key) => key.userTermsOfUse)
  termsOfUse?: TermsOfUse;
}
