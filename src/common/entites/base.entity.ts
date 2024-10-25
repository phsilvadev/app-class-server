import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'uuid', default: () => 'uuid_generate_v4()' })
  uuid?: string;

  @CreateDateColumn({ type: 'timestamptz' }) // Preenche automaticamente na criação
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' }) // Atualiza automaticamente a cada modificação
  updatedAt?: Date;
}
