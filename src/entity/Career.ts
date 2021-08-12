import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EGender, EMilitaryStatus, EMartialStatus } from "../types/Interfaces";

@Entity('career')
export class Career{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {name:"name", length: 512, nullable: false })
    name!:string;

    @Column("varchar", {name:"phone", length: 14, nullable: false })
    phone!:string;

    @Column("varchar", {name:"email", length: 512, nullable: false })
    email!:string;

    @Column("date", {name:"date_of_bith", nullable: false })
    dateOfBirth!:Date;

    @Column("enum", { name: "gender", enum: EGender, nullable: false })
    gender!:EGender;

    @Column("enum", { name: "military_status", enum: EMilitaryStatus, nullable: false })
    militaryStatus!:EMilitaryStatus;

    @Column("enum", { name: "martial_status", enum: EMartialStatus, nullable: false })
    martialStatus!: EMartialStatus

    @Column("longblob")
    resumeFile!: Buffer;

    @Column("varchar", {name:"resume_file_name", length: 512, nullable: false })
    resumeFileName!: string;
    
    @CreateDateColumn()
    createdAt!: Date;
}