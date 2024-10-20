import { Base } from 'src/common/entites/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class User extends Base {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  is_active: boolean;
}
