import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
