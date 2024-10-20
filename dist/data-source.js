"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const user_entity_1 = require("./src/users/entites/user.entity");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'exemples',
    database: 'developer',
    entities: [user_entity_1.User],
    migrations: [__dirname + './databases/migrations/*{.ts,.js}'],
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map