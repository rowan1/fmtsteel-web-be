import {MigrationInterface, QueryRunner} from "typeorm";

export class createSeedingUser1616631684048 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("INSERT INTO `user` (`name`, `email`, `password`) VALUES ('FMT Steel', 'info@fmtsteel.com', '1234567');")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("INSERT INTO `user` (`name`, `email`, `password`) VALUES ('FMT Steel', 'info@fmtsteel.com', '1234567');")
    }

}
