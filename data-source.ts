import { User } from 'src/users/entites/user.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'exemples',
  database: 'developer',
  entities: [User],
  migrations: [__dirname + './databases/migrations/*{.ts,.js}'],
  synchronize: true, // Desative em produção
});
