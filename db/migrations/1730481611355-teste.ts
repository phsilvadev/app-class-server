import { MigrationInterface, QueryRunner } from 'typeorm';

export class Teste1730481611355 implements MigrationInterface {
  name = 'Teste1730481611355';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "terms-of-use" ALTER COLUMN "uuid" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "terms-of-use" ALTER COLUMN "uuid" SET DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "uuid" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "uuid" SET DEFAULT uuid_generate_v4()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "uuid" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "uuid" SET DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "terms-of-use" ALTER COLUMN "uuid" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "terms-of-use" ALTER COLUMN "uuid" SET DEFAULT uuid_generate_v4()`,
    );
  }
}
