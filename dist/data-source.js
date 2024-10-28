"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const role_entity_1 = require("./src/role/entities/role.entity");
const terms_of_use_entity_1 = require("./src/terms-of-use/entities/terms-of-use.entity");
const user_terms_of_use_entity_1 = require("./src/user-terms-of-use/entities/user-terms-of-use.entity");
const user_1 = require("./src/user/entities/user");
const typeorm_1 = require("typeorm");
const path = require("fs");
console.log(__dirname + './migrations/*{.ts,.js}');
console.log(path.join(__dirname));
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'exemples',
    database: 'developer',
    entities: [user_1.User, role_entity_1.Role, user_terms_of_use_entity_1.UserTermsOfUse, terms_of_use_entity_1.TermsOfUse],
    migrations: [__dirname + 'migrations/*{.ts,.js}'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map