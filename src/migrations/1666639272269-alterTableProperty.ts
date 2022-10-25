import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableProperty1666639272269 implements MigrationInterface {
    name = 'alterTableProperty1666639272269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "value" TYPE numeric(10,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "value" TYPE numeric(2,10)`);
    }

}
