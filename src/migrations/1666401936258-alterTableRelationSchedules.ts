import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableRelationSchedules1666401936258 implements MigrationInterface {
    name = 'alterTableRelationSchedules1666401936258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" numeric(2,10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" integer NOT NULL`);
    }

}
