import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './user';

@Entity('cref')
export class Cref {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  cref: string;

  @Column({ default: false })
  isValid?: boolean;

  @OneToOne(() => User, { nullable: true }) // Torna a relação opcional
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' }) // Adiciona a opção nullable aqui
  user: User | null; // Define que o tipo pode ser User ou null
}
