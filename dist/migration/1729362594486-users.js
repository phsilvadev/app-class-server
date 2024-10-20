"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1729362594486 = void 0;
class Users1729362594486 {
    constructor() {
        this.name = 'Users1729362594486';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "is_active" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Users1729362594486 = Users1729362594486;
//# sourceMappingURL=1729362594486-users.js.map