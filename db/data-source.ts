import { Role } from 'src/role/entities/role.entity';
import { TermsOfUse } from 'src/terms-of-use/entities/terms-of-use.entity';
import { UserTermsOfUse } from 'src/user-terms-of-use/entities/user-terms-of-use.entity';
import { User } from 'src/user/entities/user';
import { DataSource } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as path from 'path';
import { Cref } from 'src/user/entities/cref';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'exemples',
  database: 'developer',
  entities: [User, Role, UserTermsOfUse, TermsOfUse, Cref],
  migrations: [path.join(__dirname, 'migrations', '*.js')],
  synchronize: true, // Desative em produção
});
