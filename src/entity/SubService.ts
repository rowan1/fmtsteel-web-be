import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";

@Entity('sub-service')
export class SubService{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column("int", {name:"service_id", nullable:false})
    serviceId!:number;

    @Column("varchar",{length:256, name:"title", nullable:true})
    title!:string;

    @Column("text",{name:"description", nullable:true})
    description!:string;

    @Column("varchar", {name:"path", length:500 ,nullable:true})
    path!: string;

    @Column("int",{name:"deleted", default:0})
    deleted:boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}