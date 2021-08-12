import {MigrationInterface, QueryRunner} from "typeorm";

export class createServiceFK1623413854585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sub-service` ADD CONSTRAINT `fk_sub-service_idx` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sub-service` DROP FOREIGN KEY `fk_sub-service_idx`");
    }

}
