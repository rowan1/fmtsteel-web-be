import {MigrationInterface, QueryRunner} from "typeorm";

export class addClientID1621374537546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("ALTER TABLE `service` MODIFY COLUMN id int NOT NULL AUTO_INCREMENT PRIMARY KEY")
        queryRunner.query("ALTER TABLE `project` MODIFY COLUMN id int NOT NULL AUTO_INCREMENT PRIMARY KEY")
        queryRunner.query("ALTER TABLE `user` MODIFY COLUMN id int NOT NULL AUTO_INCREMENT PRIMARY KEY")
        queryRunner.query("ALTER TABLE `career` MODIFY COLUMN id int NOT NULL AUTO_INCREMENT PRIMARY KEY")
        queryRunner.query("ALTER TABLE `contact` MODIFY COLUMN id int NOT NULL AUTO_INCREMENT PRIMARY KEY")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
