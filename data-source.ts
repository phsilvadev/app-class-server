import { Role } from 'src/role/entities/role.entity';
import { TermsOfUse } from 'src/terms-of-use/entities/terms-of-use.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
import { User } from 'src/user/entities/user';
import { DataSource } from 'typeorm';
import * as path from 'fs';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'exemples',
  database: 'developer',
  entities: [User, Role, UserTermsOfUse, TermsOfUse],
  migrations: [__dirname + 'migrations/*{.ts,.js}'],
  synchronize: false, // Desative em produção
});
